<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newEmail = $_POST['newEmail'];
    $newUsername = $_POST['newUsername'];
    $newPassword = $_POST['newPassword'];
    $servername = "localhost";
    $username = "root"; 
    $password = ""; 
    $dbname = "Signup data"; 
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "INSERT INTO users (email, username, password) VALUES ('$newEmail', '$newUsername', '$newPassword')";
    if ($conn->query($sql) === TRUE) {
        echo "Account created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
}
?>
