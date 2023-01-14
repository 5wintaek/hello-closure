function outerFunc() {
  var x = 10;
  var innerFunc = function () { 
    console.log(x);
    debugger
   };
  
  return innerFunc;
}

/**
 *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
 *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
 */
var inner = outerFunc(); // inner 에 할당해줌으로써 outerFunc 은 끝난거다

inner(); // 10  , inner() = ineerFunc 을 실행시켜줌