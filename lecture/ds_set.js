// ========================================
// JavaScript Set 기본 사용법
// ========================================

// Set이란?
// - 중복을 허용하지 않는 값들의 집합
// - 삽입 순서대로 요소를 순회할 수 있음
// - 값의 유일성을 보장함

// 1. Set 생성 방법
// -----------------------------------------

// 방법 1: 빈 Set 생성
const emptySet = new Set();
console.log('빈 Set:', emptySet);

// 방법 2: 배열로부터 Set 생성
const fruitSet = new Set(['사과', '바나나', '오렌지']);
console.log('과일 Set:', fruitSet);

// 방법 3: 중복이 있는 배열로 Set 생성 (중복 자동 제거!)
const numbers = new Set([1, 2, 2, 3, 3, 3, 4, 5, 5]);
console.log('중복 제거된 Set:', numbers);

console.log('\n');

// 2. Set의 크기 확인
// -----------------------------------------

console.log('=== Set 크기 확인 ===');
console.log('fruitSet 크기:', fruitSet.size);  // 배열의 length와 유사
console.log('numbers 크기:', numbers.size);

console.log('\n');

// 3. 요소 추가 - add()
// -----------------------------------------

console.log('=== 요소 추가 (add) ===');

const colors = new Set();
colors.add('빨강');
colors.add('파랑');
colors.add('초록');
console.log('색상 추가 후:', colors);

// 중복 추가 시도 (무시됨)
colors.add('빨강');
console.log('중복 추가 시도 후:', colors);  // 여전히 3개

// 메서드 체이닝 가능
colors.add('노랑').add('보라').add('주황');
console.log('체이닝으로 추가 후:', colors);

console.log('\n');

// 4. 요소 확인 - has()
// -----------------------------------------

console.log('=== 요소 확인 (has) ===');

console.log('빨강 있음?:', colors.has('빨강'));   // true
console.log('검정 있음?:', colors.has('검정'));   // false

console.log('\n');

// 5. 요소 삭제 - delete(), clear()
// -----------------------------------------

console.log('=== 요소 삭제 ===');

const animals = new Set(['강아지', '고양이', '토끼', '햄스터']);
console.log('원본:', animals);

// delete(): 특정 요소 삭제 (성공하면 true 반환)
const deleted = animals.delete('토끼');
console.log('토끼 삭제 후:', animals, '/ 삭제 성공:', deleted);

// 없는 요소 삭제 시도
const notDeleted = animals.delete('사자');
console.log('사자 삭제 시도:', notDeleted);  // false

// clear(): 모든 요소 삭제
const tempSet = new Set([1, 2, 3]);
console.log('clear 전:', tempSet);
tempSet.clear();
console.log('clear 후:', tempSet);

console.log('\n');

// 6. Set 순회 (반복)
// -----------------------------------------

console.log('=== Set 순회 방법 ===');

const fruits = new Set(['사과', '바나나', '오렌지', '포도']);

// 방법 1: for...of 문
console.log('for...of 문:');
for (const fruit of fruits) {
    console.log(`  ${fruit}`);
}

// 방법 2: forEach 메서드
console.log('forEach 메서드:');
fruits.forEach((value) => {
    console.log(`  ${value}`);
});

// 방법 3: values() 사용
console.log('values() 사용:');
for (const value of fruits.values()) {
    console.log(`  ${value}`);
}

console.log('\n');

// 7. Set과 배열 변환
// -----------------------------------------

console.log('=== Set과 배열 변환 ===');

// 배열 → Set
const arr = [1, 2, 3, 4, 5];
const setFromArr = new Set(arr);
console.log('배열 → Set:', setFromArr);

// Set → 배열 (방법 1: 스프레드 연산자)
const arrFromSet1 = [...setFromArr];
console.log('Set → 배열 (스프레드):', arrFromSet1);

// Set → 배열 (방법 2: Array.from())
const arrFromSet2 = Array.from(setFromArr);
console.log('Set → 배열 (Array.from):', arrFromSet2);

console.log('\n');

// 8. Set 활용 예제: 배열 중복 제거
// -----------------------------------------

console.log('=== 활용: 배열 중복 제거 ===');

const duplicateArr = ['a', 'b', 'a', 'c', 'b', 'd', 'a'];
console.log('중복 있는 배열:', duplicateArr);

// Set을 이용한 중복 제거 (한 줄로!)
const uniqueArr = [...new Set(duplicateArr)];
console.log('중복 제거된 배열:', uniqueArr);

console.log('\n');

// 9. 집합 연산 (수학적 집합)
// -----------------------------------------

console.log('=== 집합 연산 ===');

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

console.log('Set A:', [...setA]);
console.log('Set B:', [...setB]);

// 합집합 (Union): A ∪ B
const union = new Set([...setA, ...setB]);
console.log('합집합:', [...union]);

// 교집합 (Intersection): A ∩ B
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log('교집합:', [...intersection]);

// 차집합 (Difference): A - B
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log('차집합 (A-B):', [...difference]);

// 대칭차집합 (Symmetric Difference): (A ∪ B) - (A ∩ B)
const symmetricDiff = new Set(
    [...setA].filter(x => !setB.has(x)).concat(
        [...setB].filter(x => !setA.has(x))
    )
);
console.log('대칭차집합:', [...symmetricDiff]);

console.log('\n');
