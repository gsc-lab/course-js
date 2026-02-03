// ============================================
// Promise (프로미스)
// ============================================
// - 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
// - 콜백 지옥(Callback Hell)을 해결하기 위해 ES6에서 도입
//
// Promise 상태 3가지:
// 1. pending (대기)   : 초기 상태, 이행/거부되지 않음
// 2. fulfilled (이행) : 작업이 성공적으로 완료됨 → resolve() 호출
// 3. rejected (거부)  : 작업이 실패함 → reject() 호출
// ============================================

// --------------------------------------------
// 예제 1: Promise 기본 사용법
// --------------------------------------------
console.log("===== 예제 1: Promise 기본 =====");

const p1 = new Promise((resolve, reject) => {
    // executor 함수: Promise 생성 시 즉시 실행됨
    console.log("1) Promise 실행 시작 (동기)");

    // 비동기 작업 시뮬레이션 (1초 후 실행)
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("작업 성공!");  // fulfilled 상태로 전환
        } else {
            reject("작업 실패!");   // rejected 상태로 전환
        }
    }, 1000);
});

// Promise 생성 직후 실행 (비동기 작업 완료 전)
console.log("2) Promise 생성 완료 (동기)");

// then: fulfilled 상태일 때 실행
// catch: rejected 상태일 때 실행
// finally: 성공/실패 관계없이 항상 실행
p1.then(result => {
    console.log("3) then:", result);
}).catch(error => {
    console.log("3) catch:", error);
}).finally(() => {
    console.log("4) finally: 작업 종료");
});

// 실행 순서: 1 → 2 → (1초 후) → 3 → 4


// --------------------------------------------
// 예제 2: Promise 체이닝 (Chaining)
// --------------------------------------------
// - then()은 새로운 Promise를 반환
// - 연속적인 비동기 작업을 순차적으로 처리 가능

console.log("\n===== 예제 2: Promise 체이닝 =====");

const fetchData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 500);
    });
};

fetchData(10)
    .then(result => {
        console.log("Step 1:", result);       // 10
        return result * 2;                     // 다음 then으로 전달
    })
    .then(result => {
        console.log("Step 2:", result);       // 20
        return result + 5;
    })
    .then(result => {
        console.log("Step 3:", result);       // 25
    });


// --------------------------------------------
// 예제 3: 에러 처리
// --------------------------------------------
console.log("\n===== 예제 3: 에러 처리 =====");

const riskyOperation = (shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("의도적 에러 발생!"));
            } else {
                resolve("성공");
            }
        }, 500);
    });
};

riskyOperation(true)
    .then(result => console.log(result))
    .catch(error => console.log("에러 캐치:", error.message));


// --------------------------------------------
// 예제 4: Promise.all - 병렬 처리
// --------------------------------------------
// - 여러 Promise를 동시에 실행
// - 모두 완료되면 결과 배열 반환
// - 하나라도 실패하면 즉시 reject

console.log("\n===== 예제 4: Promise.all =====");

const task1 = new Promise(resolve => setTimeout(() => resolve("Task 1 완료"), 1000));
const task2 = new Promise(resolve => setTimeout(() => resolve("Task 2 완료"), 500));
const task3 = new Promise(resolve => setTimeout(() => resolve("Task 3 완료"), 800));

Promise.all([task1, task2, task3])
    .then(results => {
        console.log("모든 작업 완료:", results);
        // ["Task 1 완료", "Task 2 완료", "Task 3 완료"]
    });


// --------------------------------------------
// 예제 5: async/await - Promise의 문법적 설탕
// --------------------------------------------
// - Promise를 더 동기적인 코드처럼 작성 가능
// - async 함수는 항상 Promise를 반환
// - await는 Promise가 완료될 때까지 대기

console.log("\n===== 예제 5: async/await =====");

const delay = (ms, value) => {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
};

async function asyncExample() {
    console.log("async 함수 시작");

    const result1 = await delay(500, "첫 번째");
    console.log(result1);

    const result2 = await delay(500, "두 번째");
    console.log(result2);

    return "완료!";
}

asyncExample().then(result => console.log("async 함수 결과:", result));


// --------------------------------------------
// 예제 6: async/await 에러 처리 (try-catch)
// --------------------------------------------
console.log("\n===== 예제 6: async/await 에러 처리 =====");

async function asyncWithError() {
    try {
        const result = await riskyOperation(true);
        console.log(result);
    } catch (error) {
        console.log("async catch:", error.message);
    } finally {
        console.log("async finally: 정리 작업");
    }
}

asyncWithError();
