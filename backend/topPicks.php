<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: PUT, POST, GET, DELETE");

include 'db.php';

$sql = "SELECT 
	cartItem.sweetId,
	sweet.name,
	sweet.price, 
	sweet.imageUrl,
	COUNT(sweetId) AS sweet_count
	FROM cart_items AS cartItem
	JOIN sweets as sweet ON cartItem.sweetId = sweet.id 
	GROUP BY sweetId
	ORDER BY sweet_count DESC 
	LIMIT 2";

$stmt = $pdo->prepare($sql);
$stmt->execute();
$top_picks = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($top_picks);
