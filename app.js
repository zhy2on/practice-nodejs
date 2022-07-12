var express = require('express')
var app = express()
app.listen(3000, function() {
	console.log("start! express server on port 3000");
});

console.log('end of srever code...')  // 비동기 방식임으로 위에서 서버가 실행될 때까지 기다리는 게 아니라
// 아래 스택에 쌓여 있던 코드가 실행 됨
// 그래서 출력이 end of werver code 다음으로 start~~ 가 되는 것