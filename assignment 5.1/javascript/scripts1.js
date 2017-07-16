// Function to find area of a circle

var perimeter = prompt('Please enter the value of perimeter of cirlce to find its area (in-meters)');

function areaCircle (perimeter){

  var area = (perimeter**2)/(4*Math.PI);

  alert('area of circle with the perimeter of '+ perimeter +' m is '+area.toFixed(2)+' sq-m');
}

areaCircle(perimeter);