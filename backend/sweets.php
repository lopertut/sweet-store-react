<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 86400");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, DELETE");

include 'db.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input', true));

switch ($method) {
	case 'GET':
		handleGet($pdo);
		break;
	//	case 'POST':
	//		handlePost($pdo, $input);
	//		break;
	//	case 'PUT':
	//		handlePut($pdo, $input);
	//		break;
	//	case 'DELETE':
	//		handleDelete($pdo, $input);
	//		break;
	default:
		echo json_encode(['message' => 'Invalid request method']);
		break;
}

function handleGet($pdo)
{
	$sql = "SELECT * FROM sweets";
	$stmt = $pdo->prepare($sql);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($result);
}
