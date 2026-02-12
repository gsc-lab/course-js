// Open-Meteo API를 사용한 현재 날씨 조회

// API 설정
const FORECAST_API_URL = "https://api.open-meteo.com/v1/forecast";
const YEUNGJIN_UNIV_COORDS = { latitude: 35.89607, longitude: 128.62183 };

// 요청 URL 구성
const forecastUrl = new URL(FORECAST_API_URL);
forecastUrl.searchParams.set("latitude", YEUNGJIN_UNIV_COORDS.latitude);
forecastUrl.searchParams.set("longitude", YEUNGJIN_UNIV_COORDS.longitude);
forecastUrl.searchParams.set("current_weather", true);

// 날씨 데이터 요청
fetch(forecastUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
