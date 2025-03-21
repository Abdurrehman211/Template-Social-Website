<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
// Database Configuration
// define('DB_HOST', 'localhost');
// define('DB_USER', 'root');
// define('DB_PASS', '');
// define('DB_NAME', 'donation');

$host="localhost";
$user="root";
$pass="";
$db="triodevelopers";

// Create Connection
// $connection = mysqli_connect($host, $user, $pass, $db);
$connection = new PDO("mysql:host=$host;dbname=$db", $user, $pass);


// // Check Connection
// if (!$connection) {
//     die("Connection failed: " . mysqli_connect_error());
// }
// else{
//      echo "Connected successfully";
// }
if ($_SERVER['REQUEST_METHOD'] === 'POST') {


 

    $data = json_decode(file_get_contents("php://input"), true);
    if (!$data) {
        echo json_encode(["success" => false, "message" => "Invalid input"]);
        exit();
    }
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];
    $phone = $data['phone'];
    $address = $data['address'];
    $timestamp = date("Y-m-d H:i:s"); // Current timestamp
    if (empty($name) || empty($email) || empty($message) || empty($phone) || empty($address)) {
        echo json_encode(["success" => false, "message" => "All fields are required"]);
        exit();
    }
    $sql = "INSERT INTO contact (name, email, message, phone_no, address, created_at) VALUES ('$name', '$email', '$message', '$phone', '$address', '$timestamp')";
    if ($connection->query($sql)) {
        echo json_encode(["success" => true, "message" => "Your message added successfully!", "timestamp" => $timestamp]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $connection->$error]);
    }
// $data = json_decode(file_get_contents("php://input"), true);
    // $name = ($data["name"]);
    // $company_name = ($data["company_name"]);
    // $main_line = ($data["main_line"]);
    // $review =($data["review_text"]);
    // $rating = intval($data["rating"]);
    // $timestamp = date("Y-m-d H:i:s"); // Current timestamp

    // $sql = "INSERT INTO review (name, company  ,header,reviewtext, created_at) VALUES ('$name', '$company_name',$rating,  '$review', '$timestamp')";
    // if ($connection->query($sql)) {
    //     echo json_encode(["success" => true, "message" => "Review added successfully!", "timestamp" => $timestamp]);
    // } else {
    //     echo json_encode(["success" => false, "message" => "Error: " . $connection->$error]);
    // }
}
?>

