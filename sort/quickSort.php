<?php 
//Quick sort

function quickSort($array){
    $_sizeOf = count($array);

    if($_sizeOf <= 1){
        return $array;
    }

    $pivote = $array[0];

    $left = $right = array();

    for($i = 1; $i < $_sizeOf; $i++){
        if($array[$i] < $pivote){
            $left[] = $array[$i];
        }else{
            $right[] = $array[$i];
        }
    }

    return array_merge( quickSort($left), [$pivote], quickSort($right) );
}

$myArray = [8,10,5,3,7,5,2,4];

$myArray = quickSort($myArray);

print_r($myArray);