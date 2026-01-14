const fs = require('fs');
const input = parseInt(fs.readFileSync(0, 'utf-8').trim(), 10);
const limit = 100;

function solution(n) {
    let sum = n;
    while (n > 0){
        sum += n % 10;
        n = Math.floor(n/10);
    }
    return sum;
}

let total = 0;

for (let i=1; i <= input; i++){
    const digits = i.toString().length;
    const start = Math.max(1, i - (9 * digits));

    let hasGenerator = false;

    for (let g=start; g < i; g++){
        if (g + solution(g) === i){
            hasGenerator = true;
            break;
        }
    }

    if(!hasGenerator) {
        total += 1;
    }
}

console.log(total);



//console.log(total);