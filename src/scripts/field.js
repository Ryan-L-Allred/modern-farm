//Create an empty array to add seeds to.
//Use the .push method in the addPlant function to add seed objects to the plantField array.
//I will attempt to pass the seed functions through the addPlant function.
//Use the .push method on the seed function.
//Object will pass through addPlant. Object will be added to plantField. Pass addPlant through usePlants.

let plants = []
export const addPlant = (seedObject) => { //This function is invoked in the plantSeeds function.
    if (Array.isArray(seedObject)) { //This conditional checks to see if an array is an array. This is for the cornSeed which is an array of two objects.
        for (let plant of seedObject) { //If the previous condition is met, this will loop through the corn array. 
            plants.push(plant)          //Then add the objects in the corn array to the plants array.
        }                               
    } else {
        plants.push(seedObject) //This applies to the rest of the seed objects.
    } //A return statement was not necessary for this function. 
}



export const usePlants = () => {
    return plants.map((seedObject) => ({ ...seedObject })) //This creates a copy of the plants arrary.
}