//exercise 8.6
var base, height, triangle1Area, triangle2Area, triangle3Area;
function getTriangleArea (base, height) {
	if(base>0 && height>0) {
		return base*height/2;
	}
	else {
		console.log('wysokość trójkąta bądź długość podstawy mają wartość ujemną bądź zero, operacja zakończona błędem');
	}
}

console.log(getTriangleArea(10,6));
triangle1Area=getTriangleArea(10,15);
triangle2Area=getTriangleArea(3,6);
triangle3Area=getTriangleArea(2,5);