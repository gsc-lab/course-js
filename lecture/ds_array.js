// ========================================
// JavaScript 배열(Array) 기본 사용법
// ========================================

// 1. 배열 생성 방법
// -----------------------------------------

// 방법 1: 배열 리터럴 (가장 많이 사용)
const fruits = ['사과', '바나나', '오렌지'];
console.log('과일 배열:', fruits);

// 방법 2: Array 생성자
const numbers = new Array(1, 2, 3, 4, 5);
console.log('숫자 배열:', numbers);

// 방법 3: 빈 배열 생성 후 요소 추가
const colors = [];
colors[0] = '빨강';
colors[1] = '파랑';
colors[2] = '초록';
console.log('색상 배열:', colors);

console.log('\n');

// 2. 배열 요소 접근
// -----------------------------------------

console.log('=== 배열 요소 접근 ===');
console.log('첫 번째 과일:', fruits[0]);  // 인덱스는 0부터 시작
console.log('두 번째 과일:', fruits[1]);
console.log('마지막 과일:', fruits[fruits.length - 1]);
console.log('배열 길이:', fruits.length);

console.log('\n');

// 3. 배열 요소 추가/삭제
// -----------------------------------------

console.log('=== 배열 요소 추가/삭제 ===');

const animals = ['강아지', '고양이', '토끼'];
console.log('원본 배열:', animals);

// push(): 배열 끝에 요소 추가
animals.push('햄스터');
console.log('push 후:', animals);

// pop(): 배열 끝 요소 제거 (제거된 요소 반환)
const removed = animals.pop();
console.log('pop 후:', animals, '/ 제거된 요소:', removed);

// unshift(): 배열 앞에 요소 추가
animals.unshift('새');
console.log('unshift 후:', animals);

// shift(): 배열 앞 요소 제거 (제거된 요소 반환)
const firstRemoved = animals.shift();
console.log('shift 후:', animals, '/ 제거된 요소:', firstRemoved);

console.log('\n');

// 4. 배열 순회 (반복)
// -----------------------------------------

console.log('=== 배열 순회 방법 ===');

const scores = [85, 90, 78, 92, 88];

// 방법 1: for 문
console.log('for 문:');
for (let i = 0; i < scores.length; i++) {
    console.log(`  점수[${i}]: ${scores[i]}`);
}

// 방법 2: for...of 문 (ES6)
console.log('for...of 문:');
for (const score of scores) {
    console.log(`  점수: ${score}`);
}

// 방법 3: forEach 메서드
console.log('forEach 메서드:');
scores.forEach((score, index) => {
    console.log(`  점수[${index}]: ${score}`);
});

console.log('\n');

// 5. 유용한 배열 메서드
// -----------------------------------------

console.log('=== 유용한 배열 메서드 ===');

const nums = [1, 2, 3, 4, 5];

// map(): 각 요소를 변환하여 새 배열 생성
const doubled = nums.map(n => n * 2);
console.log('map (2배):', doubled);

// filter(): 조건에 맞는 요소만 추출
const evenNums = nums.filter(n => n % 2 === 0);
console.log('filter (짝수):', evenNums);

// find(): 조건에 맞는 첫 번째 요소 반환
const found = nums.find(n => n > 3);
console.log('find (3보다 큰 첫 요소):', found);

// includes(): 특정 요소 포함 여부 확인
console.log('includes(3):', nums.includes(3));
console.log('includes(10):', nums.includes(10));

// indexOf(): 특정 요소의 인덱스 반환 (없으면 -1)
console.log('indexOf(4):', nums.indexOf(4));
console.log('indexOf(10):', nums.indexOf(10));

// reduce(): 배열을 하나의 값으로 축소
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log('reduce (합계):', sum);

console.log('\n');

// 6. 배열 정렬과 뒤집기
// -----------------------------------------

console.log('=== 배열 정렬과 뒤집기 ===');

const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log('정렬 전:', unsorted);

// sort(): 배열 정렬 (원본 배열 변경됨!)
// 주의: 기본 정렬은 문자열 기준이므로 숫자는 비교 함수 필요
const sorted = [...unsorted].sort((a, b) => a - b);  // 오름차순
console.log('오름차순 정렬:', sorted);

const descending = [...unsorted].sort((a, b) => b - a);  // 내림차순
console.log('내림차순 정렬:', descending);

// reverse(): 배열 순서 뒤집기
const reversed = [...unsorted].reverse();
console.log('뒤집기:', reversed);

console.log('\n');

// 7. 배열 합치기와 자르기
// -----------------------------------------

console.log('=== 배열 합치기와 자르기 ===');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat(): 배열 합치기
const combined = arr1.concat(arr2);
console.log('concat:', combined);

// 스프레드 연산자로 합치기 (ES6)
const combined2 = [...arr1, ...arr2];
console.log('스프레드 연산자:', combined2);

// slice(): 배열의 일부분 추출 (원본 변경 안됨)
const sliced = combined.slice(1, 4);  // 인덱스 1부터 3까지
console.log('slice(1, 4):', sliced);

// splice(): 배열 요소 추가/삭제 (원본 변경됨!)
const spliceTest = [1, 2, 3, 4, 5];
spliceTest.splice(2, 1, 'a', 'b');  // 인덱스 2에서 1개 삭제하고 'a', 'b' 추가
console.log('splice 후:', spliceTest);

console.log('\n');

// 8. 배열 확인
// -----------------------------------------

console.log('=== 배열 확인 ===');

console.log('Array.isArray([1, 2, 3]):', Array.isArray([1, 2, 3]));  // true
console.log('Array.isArray("hello"):', Array.isArray('hello'));      // false

console.log('\n');


