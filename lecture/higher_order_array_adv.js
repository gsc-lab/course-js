import { Student } from './myclasses/students.js'

// 학생 데이터 초기화
const stdList = [
    new Student(25000, "kim", 10, 20, 30),
    new Student(25001, "lee", 20, 100, 30),
    new Student(25002, "jung", 100, 50, 60)
];

// 합계 기준 내림차순 정렬
stdList.sort((a, b) => b.sum - a.sum);

// 헤더 출력
console.log("ID\tName\tKor\tMath\tEng\tSum\tAvg");
console.log("─".repeat(56));

// 학생 정보 출력 (toString 활용)
stdList.forEach(v => console.log(`${v}`));

// 구분선
console.log("─".repeat(56));

// 전체 통계
const totalSum = stdList.reduce((acc, v) => acc + v.sum, 0);
const totalAvg = totalSum / stdList.length;
console.log(`Total Sum: ${totalSum}\tTotal Avg: ${totalAvg.toFixed(2)}`);

// 최저점 학생 (reduce 활용)
const lowestStd = stdList.reduce((min, cur) => min.sum < cur.sum ? min : cur);
console.log(`Lowest:\t${lowestStd}`);

// 최고점 학생 (reduce 활용)
const highestStd = stdList.reduce((max, cur) => max.sum > cur.sum ? max : cur);
console.log(`Highest: ${highestStd}`);
