<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require "config.php"; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = trim($data["name"] ?? '');
    $company_name = trim($data["company_name"] ?? '');

    $review = trim($data["review_text"] ?? '');
    $rating = isset($data["rating"]) ? intval($data["rating"]) : 0;
    $Company = trim($data["company"] ?? '');
    $timestamp = date("Y-m-d H:i:s");

    // 🔥 Check if all fields are filled
    if (empty($name) || empty($company_name) || empty($review) || empty($rating) || empty($Company)) {
        echo json_encode(["success" => false, "message" => "Please fill all fields."]);
        exit; // 🔴 Stop script execution after error
    }

    try {
        // ✅ Use prepared statement
        $sql = "INSERT INTO review (name, company, header, reviewtext, forcompany, created_at) 
                VALUES (:name, :company_name, :main_line, :review, :Company, :timestamp)";

        $stmt = $connection->prepare($sql);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':company_name', $company_name);
        $stmt->bindParam(':main_line', $rating);
        $stmt->bindParam(':review', $review);
        $stmt->bindParam(':Company', $Company);
        $stmt->bindParam(':timestamp', $timestamp);

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Review added successfully!", "timestamp" => $timestamp]);
        } else {
            echo json_encode(["success" => false, "message" => "Failed to insert review."]);
        }
    } catch (PDOException $e) {
        echo json_encode(["success" => false, "message" => "Database error: " . $e->getMessage()]);
    }
}

?>
