function volume (a) {
	return function (bx) {
			return function (cx){
				return a*bx*cx 
			}
	}
}

const ccvvvbb = volume(10)
const ccvvvbb1 = ccvvvbb(7)(9)