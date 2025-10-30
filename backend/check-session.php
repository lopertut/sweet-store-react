<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if (isset($_SESSION["userId"])) {
	echo json_encode(["loggedIn" => true, "userId" => $_SESSION["userId"]]);
} else {
	echo json_encode(["loggedIn" => false]);
}
