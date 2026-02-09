// ============================================
// then()이 반환하는 Promise의 상태 결정 규칙
// ============================================
// then()은 항상 새로운 Promise를 반환한다.
// 그 Promise의 상태는 handler의 실행 결과로 결정된다.
//
//  handler가 값을 return → fulfilled (그 값으로)
//  handler가 return 생략  → fulfilled (undefined로)
//  handler가 throw        → rejected  (그 에러로)
//  handler가 Promise를 return → 그 Promise를 따라감
//  해당 상태의 handler가 없음  → 이전 상태가 그대로 전달
// ============================================

// --- 1. 기본: handler의 return 값이 다음 Promise의 결과 ---

const p1 = Promise.resolve(1);

const p2 = p1.then((value) => {
  console.log(`p1 handler: ${value}`);
  return value * 10; // 10을 return → p2는 fulfilled(10)
});

p2.then((value) => console.log(`p2 결과: ${value}`)); // 10


// --- 2. return 생략 → undefined로 fulfilled ---

const p3 = Promise.resolve("hello");

const p4 = p3.then((value) => {
  console.log(`p3 handler: ${value}`);
  // return 없음 → p4는 fulfilled(undefined)
});

p4.then((value) => console.log(`p4 결과: ${value}`)); // undefined


// --- 3. throw → rejected ---

const p5 = Promise.reject(2);

const p6 = p5.then(null, (error) => {
  console.log(`p5 reject handler: ${error}`);
  throw new Error("something went wrong");
  // throw → p6은 rejected
});

p6.then(null, (error) => console.log(`p6 결과: ${error.message}`));
// "something went wrong"


// --- 4. handler가 Promise를 return → 그 Promise를 따라감 ---

const p7 = Promise.resolve("start");

const p8 = p7.then((value) => {
  console.log(`p7 handler: ${value}`);
  return new Promise((resolve) => {
    setTimeout(() => resolve("async done"), 1000);
  });
  // p8은 이 내부 Promise가 resolve될 때까지 pending
});

p8.then((value) => console.log(`p8 결과: ${value}`)); // 1초 후 "async done"


// --- 5. handler가 없으면 상태가 그대로 통과 ---

const p9 = Promise.reject("에러 발생!");

const p10 = p9.then((value) => {
  // rejected 상태인데 fulfilled handler만 있음
  // → 이 handler는 실행되지 않고, reject가 그대로 통과
  console.log("이 줄은 실행되지 않음");
});

p10.then(null, (error) => console.log(`p10 결과: ${error}`));
// "에러 발생!" (p9의 reject 이유가 그대로 전달)