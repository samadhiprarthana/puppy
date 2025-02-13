<?php
require 'db.php'; // Include database connection

error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON Data
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input
    if (!isset($data['username'], $data['email'], $data['password'])) {
        echo json_encode(["status" => "error", "message" => "Invalid input"]);
        exit;
    }

    $username = trim($data['username']);
    $email = trim($data['email']);
    $password = password_hash($data['password'], PASSWORD_BCRYPT);

    try {
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->execute([$username, $email, $password]);

        echo json_encode(["status" => "success", "message" => "Registration successful"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Registration failed: " . $e->getMessage()]);
    }
}
?>
