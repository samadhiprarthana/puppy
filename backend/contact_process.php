<?php
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Debugging: Check if $_POST contains data
    if (empty($_POST)) {
        die("Form data not received. Make sure form method is POST.");
    }

    if (!empty($_POST['full_name']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        $full_name = trim($_POST['full_name']);
        $email = trim($_POST['email']);
        $message = trim($_POST['message']);

        try {
            $sql = "INSERT INTO contacts (full_name, email, message) VALUES (:full_name, :email, :message)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':full_name', $full_name);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':message', $message);

            if ($stmt->execute()) {
                header("Location: ../thank_you.html");
                exit();
            } else {
                echo "Error saving message.";
            }
        } catch (PDOException $e) {
            echo "Database error: " . $e->getMessage();
        }
    } else {
        echo "All fields are required.";
    }
} else {
    die("Invalid request.");
}
?>
