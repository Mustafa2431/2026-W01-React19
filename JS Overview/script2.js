let num = [19,45,42,63,64,75,24];
// for loop
let even = 0;
let odd = 0;
let count = 0;
for(let i=0; i<num.length; i++){
    if(num[i] % 2 === 0){
        even++;
    }
    else{
        odd++;
    }
    count++;
}
console.log("Total numbers: "+count);
console.log("Even numbers: "+even);
console.log("Odd numbers: "+odd);

//recursion
function countEvenOdd(arr, index, even, odd){
    if(index === arr.length){
        console.log("Total numbers: "+(even+odd));
        console.log("Even numbers: "+even);
        console.log("Odd numbers: "+odd);
        return;
    }   
    if(arr[index] % 2 === 0){
        even++;
    }
    else{
        odd++;
    }
    countEvenOdd(arr, index+1, even, odd);
}
countEvenOdd(num, 0, 0, 0);

// forEach loop
let evenCount = 0;
let oddCount = 0;
for(let v in num){
    if(num[v] % 2 === 0){
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log("Total numbers: "+num.length);
console.log("Even numbers: "+evenCount);
console.log("Odd numbers: "+oddCount);

 evenCount = 0;
 oddCount = 0;
for(let v of num){
    v%2 === 0 ? evenCount++ : oddCount++;
}
console.log("Total numbers: "+num.length);
console.log("Even numbers: "+evenCount);
console.log("Odd numbers: "+oddCount);