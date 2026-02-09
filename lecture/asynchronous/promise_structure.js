const p = new Promise((resolve, reject) => {
  // executor: Promise 생성 시 즉시 실행됨
  // 비동기 작업을 "시작만" 하고, 기다리지는 않음
  // 작업이 언젠가 완료되면 resolve(value) 또는 
  // reject(error)를 호출하도록 연결
});

p.then(onResolved, onRejected);
// onResolved: fulfilled handler
// onRejected: rejected handler



