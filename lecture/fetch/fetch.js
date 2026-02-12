// fetch(url, options) - 서버에 HTTP 요청을 보내고 Promise를 반환
fetch("http://210.101.236.166/api/todo/2626/todos", {
  method: "POST", // HTTP 메서드 지정 (GET, POST, PUT, DELETE 등)
  headers: {
    "Content-Type": "application/json", // 요청 본문이 JSON 형식임을 명시
  },
  body: JSON.stringify({ // 요청 본문: JS 객체를 JSON 문자열로 변환
    text: "장보기",
  }),
})
  // 1단계: 응답(Response) 객체 처리
  .then(response => {
    // 4xx, 5xx 에러 처리 (fetch는 네트워크 에러만 reject하므로 직접 체크)
        if (!response.ok) throw new Error(response.status); 
    return response.json(); // 응답 본문을 JSON으로 파싱 (Promise 반환 → 다음 then으로 전달)
  })
  // 2단계: 파싱된 데이터 사용
  .then((data) => console.log(data))
  // 에러 처리: 네트워크 에러 또는 throw된 에러를 catch
  .catch((error) => console.log(error));