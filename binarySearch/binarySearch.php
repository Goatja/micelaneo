<?php 

//Logic
//Search using binary search algorithms and loop


//This function will return an int value of index
function binarySearch($array, $item): int{
    //Need both array sides
    $low = 0; // this is the left side.
    $hight = count($array) - 1;// right side
    
    //Loop that traverses the array that we will use to search for our element.
    while($low <= $hight){
        //Should create a pivot
        $mid = intdiv($low + $hight, 2);

        if($item === $array[$mid]){
            return $mid;
        }else{
            if($item < $array[$mid]){
                $hight = $mid - 1;
            }else{
                $low = $mid + 1; 
            }
        }
    }
    
    return -1;
}

//Create a array
$myArray = [10,50,100,60,40,20,70,80];

//Now we need to sort it
sort(array: $myArray);// sorted 10,20...etc-->

$result = binarySearch($myArray, 100);

if($result !== -1){
    echo "Successfuly founded index : " . $result;
}else{
    echo "Could't found any value or index";
}