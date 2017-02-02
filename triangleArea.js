//exercise 8.6
var base, height, triangle1Area, triangle2Area, triangle3Area, warning;
function getTriangleArea (base, height) {
	if(base > 0 && height > 0) {
		return base * height / 2;
	}
	else {
		return warning = 'wysokość trójkąta bądź długość podstawy mają wartość ujemną lub wynoszącą zero, operacja zakończona błędem';
	}
}

console.log(getTriangleArea(10,6));
triangle1Area = getTriangleArea(10,-15);
triangle2Area = getTriangleArea(3,6);
triangle3Area = getTriangleArea(2,5);
console.log('traiangle1Area = ' + triangle1Area);
console.log('traiangle2Area = ' + triangle2Area);
console.log('traiangle3Area = ' + triangle3Area);
