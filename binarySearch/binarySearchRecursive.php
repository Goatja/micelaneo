<?php 
// Searh binary algorithm using recursion

function binarySearchRecursive($array, $target, $low = 0, $hight= null){
    if($hight === null){
        $hight = count($array) - 1;
    }

    if($low > $hight){
        return - 1;
    }

    $mid =  intdiv($low + $hight, 2);

    if($target === $array[$mid]){
        return $mid;
    }elseif($target < $array[$mid]){
        binarySearch($array, $target, $low, $mid - 1);
    }else{

        binarySearch($array, $target, $mid + 1, $hight);
    }
}

$miArray = [23, 12, 45, 6, 10, 3, 10];
sort($miArray); // Must be sorted

$result = binarySearchRecursive($miArray, 12);

if ($result !== -1) {
    echo "Found at index: $result\n";
} else {
    echo "Item not found\n";
}
