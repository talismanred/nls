<?php
$servername = "localhost";
$username = "cl16-nlsenq";
$password = "nlsenq";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$data = json_decode(file_get_contents('php://input'), TRUE);
$text = print_r($data,true);

echo "<pre>";
var_dump($text);
echo "<br /><br />";
print_r($data['name']['$modelValue']);
echo "<br /><br />";
print_r($data['email']['$modelValue']);
echo "<br /><br />";
print_r($data['message']['$modelValue']);
echo "<br />..and finally...<br />";
print_r($data['email_subject']);
echo "</pre>";


$nameDB = $data['name']['$modelValue'];
$emailDB = $data['email']['$modelValue'];
$messageDB = $data['message']['$modelValue'];
$subjectDB = $data['email_subject'];

$conn->query("INSERT INTO `cl16-nlsenq`.`enquiries` (`name`, `email`, `message`, `subject`) VALUES ('".$nameDB."', '".$emailDB."', '".$messageDB."', '".$subjectDB."');");

$conn->close();

?>