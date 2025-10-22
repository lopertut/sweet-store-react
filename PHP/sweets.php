<?php
header("Content-Type: application/json");
include 'db.php';

$method = $_SERVER['REQUEST METHOD'];
$input = json_decode(file_get_contents('php://input', true));

switch ($method) {
    case 'GET':
        handleGet($pdo);
        break;
    case 'POST':
        handlePost($pdo, $input);
        break;
    case 'PUT':
        handlePut($pdo, $input);
        break;
    case 'DELETE':
        handleDelete($pdo, $input);
        break;
    default:
        echo json_encode(['message' => 'Invalid request method']);
        break;
}
?>