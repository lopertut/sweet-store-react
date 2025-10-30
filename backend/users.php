<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: PUT, POST, GET, DELETE");

include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input", true));

switch ($method) {
	case "GET":
		handleGet($pdo);
		break;
	case "POST":
		handlePost($pdo, $input);
		break;
	default:
		echo json_encode(["message' => 'Invalid request method"]);
		break;
}

function handleGet($pdo)
{
	$sql = "SELECT * FROM users";
	$stmt = $pdo->prepare($sql);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);
}

function handlePost($pdo, $input)
{
	$username = $input->username;
	$password = $input->password;
	$action = $input->action;

	if ($action == "login") {
		$user = getUserByUsername($pdo, $username);

		if ($user && $password == $user["password"]) {
			$_SESSION["userId"] = $user["id"];
			echo json_encode(['success' => true]);
		} else {
			echo json_encode(['success' => false]);
		}
	} elseif ($action == "registration") {
		$sql = "INSERT INTO users(username, password) VALUES(:username, :password)";
		$stmt = $pdo->prepare($sql);
		$stmt->execute(["username" => $username, "password" => $password]);

		$user = getUserByUsername($pdo, $username);
		$sql = "INSERT INTO carts(userId) VALUES(:userId)";
		$stmt = $pdo->prepare($sql);
		$stmt->execute(["userId" => $user["id"]]);
	}
}

function getUserByUsername($pdo, $username)
{
	$sql = "SELECT * FROM users WHERE username = ?";
	$stmt = $pdo->prepare($sql);
	$stmt->execute([$username]);
	return $stmt->fetch(PDO::FETCH_ASSOC);
}
