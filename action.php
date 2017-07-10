<?php
/**
 * Created by PhpStorm.
 * User: mkondratek
 * Date: 08.07.17
 * Time: 14:08
 */
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="./stylesheets/main.css">
    <title>mkondratek</title>
</head>
<body>
<?php echo var_dump($_POST); ?>

<?php echo $_POST["name"]; ?>
<h2>Hello! <?php echo ' You are ' . $_POST["name"] . ' ' . $_POST["surname"]
        . '.<br>Your age is ' . $_POST["age"] . '.'; ?> </h2>

<form action="./index.php">
    <input type="submit" name="goback" value="back to index.php">
</form>
</body>
</html>