<?php

if (isset($_POST["message"])) {
    $userMessage = strtolower($_POST["message"]);
    $botResponse = "hello I am chatbot. You said: " . $userMessage;
    echo $botResponse;
}
?>
