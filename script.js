// We use the parentheses because of operator precedence. 
// Since division and multiplication are both no13 on the precedence list, 
// it means they will be parsed (or processed) simultaneously. Thus the parentheses are not required.
// (I tested both with parentheses as well as without and the result is always the same)

// CASE 1
const triangleOne = 10*13 / 2;
console.log(triangleOne);
// 65

const triangleTwo = 16.5*20.3 / 2;
console.log(triangleTwo);
// 167.47

const largestTriangleCase1 = triangleOne > triangleTwo; // cannot think of any other way to compare these other than using a comparison operator; 
//hopefully, i'm not missing the point of the exercise! could i perhaps do it with if-else? hmm..
console.log(largestTriangleCase1);
// false

const triangleCaseOne = `Triangle One has an area of ${triangleOne}m2 and Triangle Two has an area of ${triangleTwo}m2.
The triangle with the largest area is Triangle Two.`;
console.log(triangleCaseOne);

// CASE 2
const triangleThree = 16.5*20.3 / 2;
console.log(triangleThree);
// 167.47

const triangleFour = 16.5*20.3 / 2;
console.log(triangleFour);
// 167.47

const largestTriangleCase2 = triangleThree == triangleFour; // which comparison operator should i use here?
console.log(largestTriangleCase2);
// true

const triangleCaseTwo = `Triangle Three has an area of ${triangleThree}m2 and Triangle Four has an area of ${triangleFour}m2.
These triangles are equal in size.`;
console.log(triangleCaseTwo)

// CASE 3 
const triangleFive = 7.8*5.6 / 2;
console.log(triangleFive);
// 21.84

const triangleSix = 9.3*12.4 / 2;
console.log(triangleSix);
// 57.66

const largestTriangleCase3 = triangleFive < triangleSix;
console.log(largestTriangleCase3);
// true

const TriangleCaseThree = `Triangle Five has an area of ${triangleFive}m2 whereas Triangle Six has an area of ${triangleSix}m2.
The triangle with the largest area is Triangle Six.`;
console.log(TriangleCaseThree);
