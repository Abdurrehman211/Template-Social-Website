<?php
// Set headers for CORS and JSON response
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Validate form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';


// Check required fields
if (empty($name) || empty($email) ) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
    exit;
}

// Validate PDF upload
if (!isset($_FILES['pdf']) || $_FILES['pdf']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'PDF upload failed.']);
    exit;
}

// Get uploaded PDF
$pdfTmpPath = $_FILES['pdf']['tmp_name'];
$pdfFileName = basename($_FILES['pdf']['name']);
$pdfSavePath = __DIR__ . '/' . $pdfFileName; 

// Move uploaded file to server
if (!move_uploaded_file($pdfTmpPath, $pdfSavePath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to save PDF.']);
    exit;
}

// Initialize PHPMailer
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

    // Email Details
    $mail->setFrom($email, $name);
    $mail->addAddress('samahhomecare@gmail.com', 'Samah Home Care');
    $mail->addBCC($email);
    $mail->addBCC('battlemani790@gmail.com');
    // Attach PDF
    $mail->addAttachment($pdfSavePath, 'JobApplication.pdf');

    // Email Subject & Body
    $mail->isHTML(true);
    $mail->Subject = "Job Application - $name";
    $mail->Body    = "<p>Dear Team,</p>
                      <p>Please find the attached job application form.</p>
                      <p><strong>Name:</strong> $name</p>
                      <p><strong>Email:</strong> $email</p>
                      
                      <p>Best Regards,<br>$name</p>";

    // Send Email
    if ($mail->send()) {
        echo json_encode(['success' => true, 'message' => 'PDF sent successfully!']);
    } else {
        throw new Exception("Mailer Error: " . $mail->ErrorInfo);
    }

    // Delete uploaded PDF after sending
    unlink($pdfSavePath);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Email could not be sent. Error: {$mail->ErrorInfo}"]);
}
?>



