// Create class math having two static methods, cube and square, 
// whose job is to return the square and cube of a number

class math {
    static cube(value) {
          let cubeValue=value*value*value;
          document.getElementById("print1").innerHTML = `cube of ${value} is ${cubeValue}`;
    }
    static square(value) {
        let squVal=value * value;
        document.getElementById("print2").innerHTML=`Square of ${value} is ${squVal}`;
    }
}

math.cube(5);
math.square(5);