

// 1 ~ 100 까지 중 3의 배수만 더한 총합을 continue를 활용해 작성해주세요.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    sum += i;
}
console.log(sum);