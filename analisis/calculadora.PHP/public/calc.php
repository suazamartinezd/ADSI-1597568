<?php

require '../src/calculator.php';

use calculatorPHP\calculator;

try {
    $number1 = (float) $_GET["number1"];
    $number2 = (float) $_GET["number2"];
    $operation = (integer) $_GET['operations'];
    $message = null;

    $calc = new calculator();
    /**
     *  > mayor que
     *  < menor que
     *  == igualdad
     *  != diferente
     * === identico
     *  !== totalmente diferente 
     *  >= mayor o igual 
     *  <= menor igual
     *  ! negacion
     */
    $calc->setNumber1($number1);
    $calc->setNumber2($number2);

    if ($operation === 1) {
        $message = "the sum between" . $number1 . "and" . "$number2" . "is" . $calc->sum();
    } else if ($operation === 2) {
        $message = "the rest between" . $number1 . "and" . "$number2" . "is" . $calc->rest();
    } else if ($operation === 3) {
        $message = "the mult between" . $number1 . "and" . "$number2" . "is" . $calc->mult();
    } else if ($operation === 4) {
        $message = "the div between" . $number1 . "and" . "$number2" . "is" . $calc->div();
    } else if ($operation === 5) {
        $message = "the log the arg" . $number1 . "and the base" . $number2 . "is" . $calc->logat();
    } else if ($operation === 6) {
        $message = "the number" . $number1 . "squared is" . $calc->squared();
    } else if ($operation === 7) {
        $message = "the number" . $number1 . "elevated" . $number2 . "is" . $calc->pow();
    } else if ($operation === 8) {
        $message = 'the number' . $number1 . ' its squared root is ' . $calc->sqrt();
    } else if ($operation === 9) {
        $message = 'the number ' . $number1 . ' the root ' . $number2 . ' is ' . $calc->root();
    } elseif ($operation === 10) {
        $message = ' The module between ' . $number1 . ' and ' . $number2 . ' is = ' . $calc->divm();
    } else {
        $message = 'Error: the operation is invalid';
    }
} catch (Exception $exc) {
    if ($exc->getCode() == 99) {
        $message = $exc->getMessage();
    } else {
        echo 'I\'m sorry, we have a problem';
        echo $exc->getMessage();
        echo '<br>';
        echo $exc->getTraceAsString();
    }
} finally {
    if ($message !== null) {
        require 'index.php';
    }
}