// http 서버가 있어야 웹 브라우저의 요청을 처리할 수 있음
import http from "http"; // http 모듈 불러오기

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // writeHead 메서드: 응답에 대한 정보를 기록하는 메서드
    res.write("<h1>Hello Node!</h1>"); // write 메서드: 클라이언트로 보낼 데이터
    res.end("<p>Hello Server!</p>"); // end 메서드: 응답을 종료하는 메서드
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기 중입니다!");
  });
