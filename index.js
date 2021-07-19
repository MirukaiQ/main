// Первая задача 
    function isAdult(age) {
        if (isNaN(age)) {
            return null
    }
        if (age < 18) {
            return true
    }
        else {
            return false
    }
}
// Вторая задача
    function checkMultiplicity(value1, value2) {
        return (value1 % value2 === 0 ) 
    }
    
// Третья задача
    function checkTriangle(sideA, sideB, sideC) {
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
            return true
        }
        else {
            return false
        }
    }
// Четвёртая задача     
// Ромб 
    function rhombusArea(side, height) {
        return side * height
        
    }
// Цилиндр
    function cylinderArea (radius, height) {
        return 2 * Math.PI * radius * height + 2 * Math.PI * radius**2
    }  
// Треугольник      
    function triangleArea(base, height) {
        return 1/2 * base * height
    }
// Прямоугольник
    function rectangleArea(length, widht) {
        return length * widht
    }
//Необязательные задачи 
// 1)
    function isPrime(number){
        if (isNaN(number) || number <=1) {
            return null
        } 
        for (let i = 2 ; i < number ; i++) {
            if (number % 1 === 0) {
                return false
            }
            else {
                return true
            }
        }
        
    }    
    