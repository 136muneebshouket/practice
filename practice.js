var arr1=[6,4,8,10,9];
var arr2=[5,10,8,9,4];

const issame=
arr1.length == arr2.length &&
arr1.every((currelement)=>{
     if(arr2.indexOf(currelement)>-1){

        return (currelement = arr2[arr2.indexOf(currelement)])
     }
 
})
console.log(issame);