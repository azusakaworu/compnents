<?php//1
    $user = "root";
    $pw = "";
    try {
        $conn = new PDO('mysql:host=localhost;dbname=tempusers', $user, $pw);
        var_dump($conn);
    } catch(PDOException $exception) {
        echo 'connect error!' . $exception->getMessage();
    }
?>