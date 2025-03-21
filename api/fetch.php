<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

require 'index.php'; // Ensure 'index.php' contains DB connection setup

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $sql = "SELECT * FROM review LIMIT 20";  // Ensure table name is correct
        $stmt = $connection->query($sql);
        
        if ($stmt === false) {
            echo json_encode(["success" => false, "message" => "SQL Error: " . $connection->errorInfo()]);
            exit();
        }
        
        $reviews = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $reviews[] = $row;
        }
        
        // Return JSON response
        echo json_encode([
            "success" => true,
            "reviews" => $reviews
        ]);
    }
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
