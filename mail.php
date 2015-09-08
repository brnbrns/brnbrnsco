<?php


error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_STRICT);


set_include_path("." . PATH_SEPARATOR . ($UserDir = dirname($_SERVER['DOCUMENT_ROOT'])) . "/pear/php" . PATH_SEPARATOR . get_include_path());
require_once "Mail.php";


$host = "ssl://mail.brnbrns.co";
$username = "brian@brnbrns.co";
$password = "D25&ecma478X";
$port = "465";
$to = "brian@brnbrns.co";
$email_from = "brian@brianburns.co";
$name = $_POST['contact_name'];
$email_subject = "Message from $name";
$email_body = $_POST['contact_message'];
$email_address = $_POST['contact_email'];


$headers = array ('From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);


if (PEAR::isError($mail)) {
echo("<p>" . $mail->getMessage() . "</p>");
} else {
echo("<p>Message successfully sent!</p>");
}
?>
