<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "sweet-store";

try {
	$pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	echo "Connected successfully";
} catch (PDOException $e) {
	echo "Connection failed: " . $e->getMessage();
}
