//Given a base and a height return the area of a triangle.
//area=b*h*.5

// function triangle (base, height){
//   var area = 0.5*base*height
//   console.log(area)
// }
//    Complete the function circleArea so that it will return the area of a circle
//    with the given radius. Round the returned number to two decimal places
//    (except for Haskell). If\ the radius is not positive or not a number, return false.
var circleArea = function(radius) {
 var area= radius* radius* Math.PI
 var roundingArea=parseFloat(area.toFixed(2))
 if(isNaN(radius) || radius <=0 ){
   return false
 }return roundingArea
 }
   
