let statistics = { 
    redCars: 21,
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
};


for (const property in statistics) {
    //checks if object property starts with r or if the value of the property is odd
    if ((property[0] === "r" || statistics[property] % 2 === 1)) {
        //if so print the property name 
        console.log(property);
    }
    
} 



