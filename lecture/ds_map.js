// ========================================
// JavaScript Map 기본 사용법
// ========================================

// Map이란?
// - 키-값(key-value) 쌍을 저장하는 자료구조
// - 객체(Object)와 유사하지만 더 유연함
// - 어떤 타입이든 키로 사용 가능 (객체, 함수, 숫자 등)
// - 삽입 순서대로 순회 가능

// 1. Map 생성 방법
// -----------------------------------------

// 방법 1: 빈 Map 생성
const emptyMap = new Map();
console.log('빈 Map:', emptyMap);

// 방법 2: 초기값과 함께 생성 (2차원 배열 형태)
const fruitPrices = new Map([
    ['사과', 1500],
    ['바나나', 2000],
    ['오렌지', 3000]
]);
console.log('과일 가격 Map:', fruitPrices);

console.log('\n');

// 2. Map 크기 확인
// -----------------------------------------

console.log('=== Map 크기 확인 ===');
console.log('fruitPrices 크기:', fruitPrices.size);

console.log('\n');

// 3. 값 설정 - set()
// -----------------------------------------

console.log('=== 값 설정 (set) ===');

const studentScores = new Map();

// set(키, 값)으로 추가
studentScores.set('홍길동', 85);
studentScores.set('김철수', 92);
studentScores.set('이영희', 88);
console.log('학생 점수:', studentScores);

// 메서드 체이닝 가능
studentScores.set('박민수', 95).set('최지현', 90);
console.log('체이닝으로 추가 후:', studentScores);

// 기존 키에 새 값 설정 (덮어쓰기)
studentScores.set('홍길동', 90);
console.log('홍길동 점수 수정 후:', studentScores);

console.log('\n');

// 4. 값 가져오기 - get()
// -----------------------------------------

console.log('=== 값 가져오기 (get) ===');

console.log('홍길동 점수:', studentScores.get('홍길동'));  // 90
console.log('김철수 점수:', studentScores.get('김철수'));  // 92
console.log('없는 학생:', studentScores.get('강감찬'));     // undefined

console.log('\n');

// 5. 키 존재 확인 - has()
// -----------------------------------------

console.log('=== 키 존재 확인 (has) ===');

console.log('홍길동 있음?:', studentScores.has('홍길동'));  // true
console.log('강감찬 있음?:', studentScores.has('강감찬'));  // false

console.log('\n');

// 6. 값 삭제 - delete(), clear()
// -----------------------------------------

console.log('=== 값 삭제 ===');

const colors = new Map([
    ['red', '빨강'],
    ['blue', '파랑'],
    ['green', '초록']
]);
console.log('원본:', colors);

// delete(): 특정 키-값 삭제
colors.delete('blue');
console.log('blue 삭제 후:', colors);

// clear(): 모든 요소 삭제
const tempMap = new Map([['a', 1], ['b', 2]]);
console.log('clear 전:', tempMap);
tempMap.clear();
console.log('clear 후:', tempMap);

console.log('\n');

// 7. Map 순회 (반복)
// -----------------------------------------

console.log('=== Map 순회 방법 ===');

const countries = new Map([
    ['KR', '대한민국'],
    ['US', '미국'],
    ['JP', '일본'],
    ['CN', '중국']
]);

// 방법 1: for...of 문 (구조 분해 사용)
console.log('for...of 문 (구조 분해):');
for (const [code, name] of countries) {
    console.log(`  ${code}: ${name}`);
}

// 방법 2: forEach 메서드
console.log('forEach 메서드:');
countries.forEach((value, key) => {
    console.log(`  ${key}: ${value}`);
});

// 방법 3: keys(), values(), entries() 사용
console.log('keys():', [...countries.keys()]);
console.log('values():', [...countries.values()]);
console.log('entries():', [...countries.entries()]);

console.log('\n');

// 8. 다양한 타입을 키로 사용
// -----------------------------------------

console.log('=== 다양한 타입을 키로 사용 ===');

const flexibleMap = new Map();

// 숫자를 키로
flexibleMap.set(1, '숫자 1');
flexibleMap.set(2, '숫자 2');

// 객체를 키로
const objKey = { id: 1 };
flexibleMap.set(objKey, '객체가 키');

// 함수를 키로
const funcKey = () => {};
flexibleMap.set(funcKey, '함수가 키');

// 불리언을 키로
flexibleMap.set(true, '참');
flexibleMap.set(false, '거짓');

console.log('숫자 키:', flexibleMap.get(1));
console.log('객체 키:', flexibleMap.get(objKey));
console.log('함수 키:', flexibleMap.get(funcKey));
console.log('불리언 키:', flexibleMap.get(true));

console.log('\n');

// 9. Map과 객체 변환
// -----------------------------------------

console.log('=== Map과 객체 변환 ===');

// 객체 → Map
const obj = { name: '홍길동', age: 25, city: '서울' };
const mapFromObj = new Map(Object.entries(obj));
console.log('객체 → Map:', mapFromObj);

// Map → 객체
const objFromMap = Object.fromEntries(mapFromObj);
console.log('Map → 객체:', objFromMap);

// Map → 배열
const arrFromMap = [...mapFromObj];
console.log('Map → 배열:', arrFromMap);

console.log('\n');

// 10. Map 활용 예제
// -----------------------------------------

console.log('=== 활용: 빈도수 계산 ===');

// 문자 빈도수 세기
const text = 'hello world';
const charCount = new Map();

for (const char of text) {
    if (char === ' ') continue;  // 공백 제외
    charCount.set(char, (charCount.get(char) || 0) + 1);
}

console.log('문자 빈도수:');
charCount.forEach((count, char) => {
    console.log(`  '${char}': ${count}회`);
});

console.log('\n');

console.log('=== 활용: 단어 빈도수 ===');

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordCount = new Map();

for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
}

console.log('단어 빈도수:');
wordCount.forEach((count, word) => {
    console.log(`  ${word}: ${count}회`);
});

console.log('\n');
