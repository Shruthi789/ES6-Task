const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];
/*Printing the names*/ 
const names=scores.map(({name})=>name);
console.log(names);
/*Printing the students that passed */
const passedStudents=scores.filter(({marks})=> marks>=40);
console.log(passedStudents);
/*Printing the students that failed */
const failedStudents=scores.filter(({marks})=>marks<40).map(({name})=>name);
console.log(failedStudents);
/*Printing the average marks */
const avg=scores.reduce((sum,{marks})=>sum+marks,0)/scores.length;
console.log(avg.toFixed(2));
/*Find the topper's name */
const topper=scores.reduce((topValue,value)=>(value.marks>topValue.marks)?value:topValue);
console.log(topper.name);
/*Intersection */
const intersection=(...arraySet)=>arraySet.reduce((arr1,arr2)=>arr1.filter((value)=>arr2.includes(value)));
console.log(intersection([2,1],[2,3]));
/*Uniq */
const uniq=(Arr)=>Arr.filter((value,index)=>!Arr.slice(0,index).includes(value));
console.log(uniq([2,1,2]));
/*Without */
const without=(Arr,...numbers)=>Arr.filter((value)=>!numbers.includes(value));
console.log(without([2, 1, 2, 3], 1, 2));
