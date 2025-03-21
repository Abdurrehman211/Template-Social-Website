<?php
// Set headers to allow CORS and specify JSON output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode JSON data from request
    $data = json_decode(file_get_contents("php://input"), true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid JSON data provided.']);
        exit;
    }

    // Extract and sanitize data from JSON
    $fromName      = isset($data['name']) ? htmlspecialchars($data['name']) : '';
    $userEmail     = isset($data['email']) ? htmlspecialchars($data['email']) : '';
    $subject       = isset($data['subject']) ? htmlspecialchars($data['subject']) : '';
    $phoneNumber   = isset($data['phone']) ? htmlspecialchars($data['phone']) : '';
    $messageContent= isset($data['message']) ? nl2br(htmlspecialchars($data['message'])) : '';

    // Build the email body
    $body  = "<h2>Contact Form Submission</h2>";
    $body .= "<p><strong>Name:</strong> $fromName</p>";
    $body .= "<p><strong>Email:</strong> $userEmail</p>";
    $body .= "<p><strong>Subject:</strong> $subject</p>";
    $body .= "<p><strong>Phone:</strong> $phoneNumber</p>";
    $body .= "<p><strong>Message:</strong> $messageContent</p>";

    // Include Composer's autoloader and import PHPMailer classes
   

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'battlemani790@gmail.com'; // Your authenticated email
        $mail->Password   = 'pmyx cfrz kcbq hcbg';       // Your app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Set email sender (From), using your authenticated email
        $mail->setFrom($userEmail,$fromName );

        // Add Reply-To as the sender's email (so if you reply, it goes to the user)
        // $mail->addReplyTo($userEmail, $fromName);

        // Set recipient (your email address where you want to receive submissions)
        // $mail->addAddress('uniquehomecareinc@gmail.com', '');
        $mail->addAddress('samahhomecare@gmail.com', ' Samah Home Care ');
        $mail->addBCC($userEmail);
        // Set email format and content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission: $subject";
        $mail->Body    = $body;
        $mail->AltBody = strip_tags($body);

        // Send the email
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => "Email could not be sent. Error: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
}

?>
