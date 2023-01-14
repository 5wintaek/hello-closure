function 바깥함수(){
  const 변수 = 0 

  function 안쪽함수(){
    console.log(변수)
    debugger
  }

  return 안쪽함수 
}

const 안쪽함수 = 바깥함수()

안쪽함수()



