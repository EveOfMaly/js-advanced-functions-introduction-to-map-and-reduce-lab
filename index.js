// Your code here

function mapToNegativize (sourceArray) {
   const arrayCopy = sourceArray.slice();
    
    arrayCopy.forEach((value, index) => { 
         arrayCopy[index] = value * -1 
    })
    return arrayCopy;   
}

function mapToNoChange(sourceArray) {
    const arrayCopy = sourceArray.slice();
     
     arrayCopy.forEach((value, index) => { 
          arrayCopy[index] = value 
     })
     return arrayCopy;   
 }

function mapToDouble(sourceArray) {
    const arrayCopy = sourceArray.slice();
     
     arrayCopy.forEach((value, index) => { 
          arrayCopy[index] = value * 2
     })
     return arrayCopy;   
 }

 function mapToSquare(sourceArray) {
    const arrayCopy = sourceArray.slice();
     
     arrayCopy.forEach((value, index) => { 
          arrayCopy[index] = value ** 2
     })
     return arrayCopy;   
 }


 function reduceToTotal(sourceArray, startingPoint = 0 ) {
     sourceArray.forEach((value) => {
    
         startingPoint = value + startingPoint
     })
     return startingPoint;   
 }


 sourceArray = [ false, null, null, null, true]

 function reduceToAllTrue(sourceArray) {
     let truePresent = false
     let falseCounter = 0

     sourceArray.forEach((value, index) => { 
         sourceArray[index] === false ? falseCounter++  : falseCounter
     })

     if (falseCounter == 0) {
        truePresent = true
     }

    return truePresent
 }

 function reduceToAnyTrue(sourceArray) {
    let truePresent = false

    sourceArray.forEach((value, index) => { 
        sourceArray[index] === true ? truePresent = true : truePresent = false
    })
   return truePresent
}




    


    