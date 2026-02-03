// ============================================
// 함수의 필요성 (Why We Need Functions)
// ============================================
// 문제: 비슷한 작업을 반복할 때 코드 중복이 발생
// 해결: 함수를 사용하여 재사용 가능한 코드 블록으로 추출
// ============================================


// --------------------------------------------
// BEFORE: 함수 없이 작성한 코드 (코드 중복 발생)
// --------------------------------------------
console.log("===== BEFORE: 함수 없이 작성 =====\n");

const scores = [10, 20, 30];

// 1) 원본 배열 출력
console.log("[ 원본 배열 ]");
for (let value of scores) {
    console.log(`점수: ${value}`);
}

// 2) 각 요소에 1을 더함 (코드 패턴 #1)
for (let index in scores) {
    scores[index] = scores[index] + 1;
}

// 출력 (반복되는 코드)
console.log("\n[ +1 추가 후 ]");
for (let value of scores) {
    console.log(`점수: ${value}`);
}

// 3) 각 요소에 2를 더함 (코드 패턴 #1 반복!)
for (let index in scores) {
    scores[index] = scores[index] + 2;
}

// 출력 (또 반복되는 코드!)
console.log("\n[ +2 추가 후 ]");
for (let value of scores) {
    console.log(`점수: ${value}`);
}

// 문제점:
// - 같은 패턴의 코드가 반복됨 (DRY 원칙 위반: Don't Repeat Yourself)
// - 수정이 필요하면 여러 곳을 수정해야 함
// - 코드가 길어지고 가독성이 떨어짐


// --------------------------------------------
// AFTER: 함수를 사용한 코드 (코드 재사용)
// --------------------------------------------
console.log("\n\n===== AFTER: 함수 사용 =====\n");

const grades = [10, 20, 30];

// 함수 1: 배열 출력 함수
function printArray(arr, label) {
    console.log(`[ ${label} ]`);
    for (let value of arr) {
        console.log(`점수: ${value}`);
    }
}

// 함수 2: 배열의 모든 요소에 값을 더하는 함수
function addToAll(arr, num) {
    for (let index in arr) {
        arr[index] = arr[index] + num;
    }
}

// 깔끔한 코드!
printArray(grades, "원본 배열");

addToAll(grades, 1);
printArray(grades, "+1 추가 후");

addToAll(grades, 2);
printArray(grades, "+2 추가 후");

addToAll(grades, 10);
printArray(grades, "+10 추가 후");  // 새로운 연산도 쉽게 추가!


// --------------------------------------------
// 함수 사용의 장점
// --------------------------------------------
// 1. 코드 재사용: 같은 코드를 여러 번 작성할 필요 없음
// 2. 유지보수 용이: 수정이 필요하면 함수 하나만 수정
// 3. 가독성 향상: 함수 이름만 봐도 무엇을 하는지 알 수 있음
// 4. 추상화: 세부 구현을 숨기고 "무엇을 하는지"에 집중
// 5. 테스트 용이: 함수 단위로 테스트 가능
