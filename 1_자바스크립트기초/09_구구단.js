// 2단부터 9단까지 출력하는 구구단로직을 중첩반복문을 이용해서 만들어주세요.
// 출력 양식 `a * b = (a * b)`

for (let a = 2; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
        console.log(`${a} * ${b} = ${a * b}`);
    }
}

