<?php
// Set headers BEFORE any output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if JSON decoding was successful
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid JSON data provided.']);
        exit;
    }

    try {
        $mail = new PHPMailer(true);

        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'battlemani790@gmail.com';
        $mail->Password   = 'pmyx cfrz kcbq hcbg';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;


        // Extract data from JSON
        $referrerFirstName = isset($data['referrer_first_name']) ? htmlspecialchars($data['referrer_first_name']) : '';
        $referrerLastName  = isset($data['referrer_last_name']) ? htmlspecialchars($data['referrer_last_name']) : '';
        $referrerPhone     = isset($data['referrer_phone']) ? htmlspecialchars($data['referrer_phone']) : '';
        $referrerEmail     = isset($data['referrer_email']) ? htmlspecialchars($data['referrer_email']) : '';

        $clientFirstName   = isset($data['client_first_name']) ? htmlspecialchars($data['client_first_name']) : '';
        $clientLastName    = isset($data['client_last_name']) ? htmlspecialchars($data['client_last_name']) : '';
        $clientDob         = isset($data['client_dob']) ? htmlspecialchars($data['client_dob']) : '';
        $clientSSN         = isset($data['client_ssn']) ? htmlspecialchars($data['client_ssn']) : '';
        $clientMANumber    = isset($data['client_ma_number']) ? htmlspecialchars($data['client_ma_number']) : '';
        $clientAddress     = isset($data['client_address']) ? htmlspecialchars($data['client_address']) : '';
        $streetAddress     = isset($data['street_address']) ? htmlspecialchars($data['street_address']) : '';
        $clientCity        = isset($data['client_city']) ? htmlspecialchars($data['client_city']) : '';
        $clientZip        = isset($data['client_zip']) ? htmlspecialchars($data['client_zip']) : '';
        $clientState       = isset($data['client_state']) ? htmlspecialchars($data['client_state']) : '';
        $service          = isset($data['service']) ? htmlspecialchars($data['service']) : '';
        $message          = isset($data['message']) ? nl2br(htmlspecialchars($data['message'])) : '';



       
$mail->setFrom( $referrerEmail , $referrerFirstName); 


$mail->addAddress('samahhomecare@gmail.com', 'Samah Home Care'); 


$mail->addBCC($data['referrer_email']);
$mail->addBCC('battlemani790@gmail.com');

        // Build Email Content
        $subject = "New Referral Submission";
        $body  = "<h2>New Referral Submission</h2>";
        $body .= "<h3>Referrer Information</h3>";
        $body .= "<p><strong>Name:</strong> $referrerFirstName $referrerLastName</p>";
        $body .= "<p><strong>Phone:</strong> $referrerPhone</p>";
        $body .= "<p><strong>Email:</strong> $referrerEmail</p>";
        
        $body .= "<h3>Client Information</h3>";
        $body .= "<p><strong>Name:</strong> $clientFirstName $clientLastName</p>";
        $body .= "<p><strong>Date of Birth:</strong> $clientDob</p>";
        $body .= "<p><strong>SSN:</strong> $clientSSN</p>";
        $body .= "<p><strong>MA Number:</strong> $clientMANumber</p>";
        $body .= "<p><strong>Address:</strong> $clientAddress</p>";
        $body .= "<p><strong>Street Address:</strong> $streetAddress</p>";
        $body .= "<p><strong>City:</strong> $clientCity</p>";
        $body .= "<p><strong>Zip Code:</strong> $clientZip</p>";
        $body .= "<p><strong>State:</strong> $clientState</p>";
        $body .= "<p><strong>Service:</strong> $service</p>";
        
        $body .= "<h3>Additional Message</h3>";
        $body .= "<p>$message</p>";

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = strip_tags($body);

        // Send Email
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