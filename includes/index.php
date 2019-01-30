<?php

include 'functions.php';

// sanitize any user input using some of the stuff Pan has been showing you.
// like htmlentities, prepared statements, etc

if (isset($_GET['users'])) {
    // pass the connection and the id to the get_single_user function
    $data = get_single_user($conn, $_GET['users']);
    echo json_encode($data);
} else {
    // else get them all (users, that is)
    $data = get_all_users($conn);
    echo json_encode($data);
}

?>