const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2 , 5);
// console.log(part);
// console.log(nums);

// const removed = nums.splice(2 ,3,);
// console.log(removed);
// console.log(nums);
const removed2 = nums.splice(2 ,3, 77 , 88 , 99);
console.log(removed2);
console.log(nums);

const together = nums.join('ami');
// console.log(together);

const names = ['anika' , 'anamika' , 'bithi', 'akhi' , 'arif' , 'mamun' , 'kawser'];
const partname = names.slice(2 ,5);
console.log(partname);
console.log(names);

// const deletename = names.splice(2,4);
// console.log(deletename);
// console.log(names);

const deletename2 = names.splice(2,4, "tahmid" , "kohinur", "jafrin");
console.log(deletename2);
console.log(names);

const togethername = names.join(' + ');
console.log(togethername);


