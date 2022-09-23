const students =[
    {id: 21, name: 'omar sunny'},
    {id: 31, name: 'Mannaaa'},
    {id: 41, name: 'Moyourii'},
    {id: 71, name: 'Deeojol'},
]

// let array =[];
// for( i = 0; i < students.length; i++){
//     const element = students[i];
//     console.log(element);
//     const result = element.name;
//     array.push(result);

// }
// console.log(array);


// const names = students.map(function(element){
//     return element.name
// })

const names = students.map(x => x.name);
console.log(names);

const ids = students.map(x => x.id);
console.log(ids);

const bigger = students.filter(x => x.id > 40);
console.log(bigger);

const biggerOne= students.find(x => x.id > 40);
console.log(biggerOne);



