let arr = [1,1,1,2,2,2,3,3,4,5];
let map = new Map();
let minx = 0;
for (let i = 0; i < arr.length; i++) {
    if(map.get(arr[i])===undefined){
        map.set(arr[i],1)
    }else{
        map.set(arr[i],map.get(arr[i])+1)
    }
}
console.log(map);
for (const item of map) {
    if(minx === 0){
        minx = item[1]
    }else if(minx >= item[1]) {
        minx = item[1]
    }

}
for (const item of map) {
    if(item[1]===minx){
        console.log(`số có lần xuất hiện ít nhất là : ${item[0]}`)
    }
}
