let arr = [-1,3,4,5];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j]<= arr[i]){
            console.log(` ${arr[j]} <= ${arr[i]}`)
        }
    }
}