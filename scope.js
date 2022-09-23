let bonus = 20;

function sum(first , second){
    let result = first + second + bonus;
    // console.log(result);

    if(result> 9){
        // const mood = 'happy';
        let mood = "happy";
        mood = 'fishy';
        mood = 'funky';
        mood = 'cranky';
        console.log(mood);
    }
   // console.log(day); -- undefined
    var day = "firday"; 
    console.log(day);
    // console.log(mood); -- error
    return result;
}

const output = sum(3 ,7);
//console.log(bonus);
//console.log(result)- error
console.log(output);