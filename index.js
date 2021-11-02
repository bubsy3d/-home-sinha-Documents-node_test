var rect = {

	perimeter: (x,y) => (2*(x+y)),
	area: (x,y)  => (x*y)

}

function solveRectangle(l,b){

	console.log("Solving for rectangle with l =" +l +"and b =" +b);

	if(l <= 0 || b <= 0)
	{
		console.log("Both l and b must be greater than 0 !!");
	}
	else
	{
		console.log("The area of the rectangle is " + rect.area(l,b));
		console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
	}

}

solveRectangle(4,5);
solveRectangle(-6,3);
solveRectangle(67,3422);