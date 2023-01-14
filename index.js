const useState = (초깃값) => {
	let 상태 = 초깃값

	function 읽기() {
		return 상태
	}

	function 쓰기(새값) {
		상태 = 새값
	}

	return [읽기, 쓰기]
}
const [읽기, 쓰기] = useState(0)
// const 읽기 = 배열[0]
// const 쓰기 = 배열[1]
console.log(읽기()) // 0
쓰기(읽기() + 1)
console.log(읽기()) // 1

// debugger
// a[0] // 읽기
// a[1] // 쓰기
