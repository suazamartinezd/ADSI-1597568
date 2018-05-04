<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>calculator of Diego Suaza</title>
        <meta name="viewport" content="width-device-width, initial-scale=1.0, shrink-to-fit=no">
        <link href="../node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">

    </head>
    <body>
        <!--<div class="exterior">-->
        <div class="diego">
            <h1><center>Diego Alejandro <br>Suaza Martinez</center></h1>
            <form>
                <center><input type="button" onclick="ConfirmDemo()" value="confirmation" class="btn btn-success"/></center>
            </form>
        </div>
        <form action="calc.php" method="get">

            <p> type the first number: </p>

            <input type="number" name="number1">



            <select name="operations" >   
                <option value="" >seletec of operation</option>
                <option value="1">sum</option>
                <option value="2">rest</option>
                <option value="3">mult</option>
                <option value="4">div</option>
                <option value="5">logat</option>
                <option value="6">x<sub>2</sub></option>
                <option value="7">x<sub>y</sub></option>
                <option value="8">√</option>
                <option value="9">root</option>
                <option value="10">div module</option>
            </select>

            <p>type in the second number:</p>
            <input type="number" name="number2">

            <?php if (isset($message) === true): ?>
                <?php echo $message ?>
            <?php endif ?>
            <button type="submit">operation</button>

        </form>
        <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="../node_modules/jquery/dist/jquery.min.js" type="text/javascript"></script>
        <script src="../node_modules/popper.js/dist/umd/popper.min.js" type="text/javascript"></script>
        <script src="js/main.js"></script>
    </body>
</html>
