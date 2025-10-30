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
	$userId = $_SESSION["userId"];

	$sql = "SELECT id FROM carts WHERE userId = ?";
	$stmt = $pdo->prepare($sql);
	$stmt->execute([$userId]);
	$cart = $stmt->fetch(PDO::FETCH_ASSOC);
	echo json_encode(["cartId" => $cart["id"]]);
}

function handlePost($pdo, $input)
{
	$cartId = $input->cartId;
	$sweetId = $input->sweetId;
	$quantity = $input->quantity;

	$sql = "INSERT INTO cart_items(cartId, sweetId, quantity) VALUES(:cartId, :sweetId, :quantity)";
	$stmt = $pdo->prepare($sql);
	$stmt->execute(["sweetId" => $sweetId, "quantity" => $quantity, "cartId" => $cartId]);
}
