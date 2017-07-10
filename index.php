<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="./stylesheets/main.css">
    <title>mkondratek</title>
</head>
<body>


Hello World! ~ html<br>
<?php
echo "Hello World! ~ php<br>";
?>

<div id="header">
    <h1>Lorem ipsum! </h1>
    <?php include './phpfiles/randnum.php'; ?>
</div>

<div id="content">
    <h2>Zażółć gęślą jaźń. <q title="cytat a jak!">Litwo, ojczyzno moja, Ty jesteś jak zdrowie.</q></h2>

    <br>
    <p>para para para</p>
    <p>dam</p>

    <?php
        function things() {
            echo "i am a function!";
        }
        things();

    echo '<button>
        click me
    </button>';
    ?>

    <h1>h1h1h1h1h1h1</h1>
    <h2>h2h <abbr title="header 2">2h</abbr> 2h2h2h2</h2>
    <h3>h3h3h3h3h3h3</h3><h4>h4h4h4h4h4h4</h4>
    <h5>h5h5h5h5h5h5</h5><h6>h6h6h6h6h6h6</h6>

    <?php
//    echo $_SERVER['SCRIPT_NAME']; echo '<br>';
//    $host = $_SERVER['HTTP_HOST'];
//    echo $host; echo '<br>';
//    $image_path = $host . "/images";
//    echo $image_path; echo '<br>';
//    echo $_SERVER['PHP_SELF']; echo '<br>';
//    echo $_SERVER['SERVER_ADDR']; echo '<br>';
//    echo $_SERVER['HTTP_HOST']; echo '<br>';
//    echo $_SERVER['REMOTE_ADDR']; echo '<br>';
//    echo $_SERVER['REMOTE_HOST']; echo '<br>';
//    echo $_SERVER['REMOTE_PORT']; echo '<br>';
//    echo $_SERVER['SCRIPT_FILENAME']; echo '<br>';
//    echo $_SERVER['SERVER_PORT']; echo '<br>';
//    echo $_SERVER['SCRIPT_NAME']; echo '<br>';
//    echo $_SERVER['SCRIPT_URI']; echo '<br>';
    ?>

    <form action="action.php" method="post">
        post form
        <p>Name: <input type="text" name="name" value="Jan"/></p>
        <p>Surname: <input type="text" name="surname" value="Kowalski"/></p>
        <p>Age: <input type="text" name="age" value="18"/></p>
        <input type="submit" name="submit" value="timuS"/>
    </form>

    <bdo dir="rtl" cite="http://nowhere.com">
        Ala ma kota
        kot ma ale
        ale kto ma
        mnie ?
        .
        kogo mam
        ja ?
        .
    </bdo>
    <br>
    <img src="https://www.w3schools.com/html/img_the_scream.jpg" alt="loading img">

    <a href="http://google.pl">Link to google so useful</a>

    <p title="Klucze leżą obok">met, consectetur adipiscing elit.
        Nunc porta dapibus commodo. Integer sollicitudin
        risus dui, in luctus lectus
        tristique a.
    </p>

    <pre style="color: powderblue; font-weight: 900;">
            x   x  x   x
             x x    x x
             x x    x x
        </pre>

    <p style="font-family: Verdana;">
        Aliquam efficitur <b>turpis massa</b>, aliquam condimentum ex placerat et.
        Vivamus vitae magna accumsan, pellentesque est in, mattis turpis.
        <strong>Nam gravida vel quam eu consequat.
            <small>Praesent et justo</small>
            at mi dignissim aliquam et sit amet lorem.</strong>
        Phasellus id augue ac tellus sodales efficitur.
        <em>Duis nibh ligula</em>, accumsan ut scelerisque
        vitae,
        semper
        nec arcu. Mauris a accumsan lacus. Praesent aliquet quis sem id pharetra.
    </p>
    <p style="font-family: Ubuntu; font-size: 120%" ;>
        Quisque <sup>sit amet efficitur dui</sup>, non <sub>tempor nibh</sub>.
        Orci varius natoque penatibus et
        magnis dis parturient montes,
        nascetur ridiculus mus. Etiam non orci ac nisl luctus lobortis ac non augue.
        Nam vel eros placerat, lobortis leo eget, tincidunt leo.
        <mark>Nunc</mark>
        quis cursus elit. Suspendisse nec urna venenatis,
        ultrices risus sit amet, viverra ante.
        <ins> Aenean convallis varius arcu, a accumsan velit euismod vitae.</ins>
    </p>
    <br>
    Duis venenatis tellus quis est fermentum sodales.
    <br>
    <del>Vivamus dignissim congue dolor.</del>
    Phasellus vehicula, odio eget vehicula aliquam,
    nunc magna scelerisque lorem, nec lacinia est magna in sapien.
    <i>Ut semper auctor nisl, vel suscipit elit posuere sed.</i>
    </h2>
</div>
<div id="footer">
    <p>Created by Mikołaj Kondratek. ©
        Contact: <a id="mail" href="mailto:m.kondratek@o2.pl">m.kondratek@o2.pl</a>.</p>
</div>
</body>
</html>