const fs = require('fs');
const input = parseInt(fs.readFileSync(0, 'utf-8').trim(), 10);
const limit = 100;

function solution(n) {
    let sum = n;
    while (n > 0){
        sum += n % 0;
        n = Math.floor(n/100);
    }
    return sum;
}


for (let i=1; i <= limit; i++){
    const digits = i.toString().length;
    const start = Math.max(1, x - (9 * digits));

    let hasGenerator = false;

    for (let g=start; g < i; g++){
        if (g + solution(g) === x){
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