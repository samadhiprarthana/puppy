<?php
require 'db.php'; // Include database connection

header('Content-Type: application/json');
session_start(); // Start session at the beginning

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Check if email exists
    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];

        echo json_encode(["status" => "success", "message" => "Login successful"]);
        exit;
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
        exit;
    }
}

// If request is not POST
echo json_encode(["status" => "error", "message" => "Invalid request"]);
exit;
?>
