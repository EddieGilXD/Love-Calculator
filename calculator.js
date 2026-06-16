let name1 = prompt('Insert name 1');
let name2 = prompt('Insert name 2');

if (name1 && name2){
    let response = lovePercentage()
    
    if (response > 70){
        alert (`The result of love within ${name1} and ${name2} is: ${response}%. You love each other like Kanye loves Kanye.`);
    } else {
        alert (`The result of love within ${name1} and ${name2} is: ${response}%`);
    }    
}else {
    console.log('There is one missing name');
}

function lovePercentage(){
    let n = Math.random();
    let y = n * 100;
    let percentage = Math.floor(y)+1;
    return percentage;
} 