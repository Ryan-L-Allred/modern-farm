import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

//Write a for loop to iterate through the plants array
//Declare a variable witin the for loop. Assign something object multiplied by plant.output.
//It appears that addPlants will be passed through the harvestPlants function.
//Use conditionals to access the output properties.
//Every time the loop comes across an object with an output of x, it multiplies the object by x amount.
/*Use the variable that stores the plantSeeds function as an argument for harvestPlants. Store that in a variable and then
pass it it through the usePlants function.
*/
export const harvestPlants = (plantsArray) => {
    let harvestedPlants = []

    for (let plant of plantsArray) { //For loop iterates through the plants array.
        if (plant.type === "Corn") {
            let halfTheCorn = plant.output * 0.5
            plant.output = halfTheCorn
            for (let i = 0; i < plant.output; i++) {
                harvestedPlants.push(plant) 
        }
        } else { 
        for (let i = 0; i < plant.output; i++) {
            harvestedPlants.push(plant)
        }      
     } 
  }
        return harvestedPlants
}   


    

 // if (plant.output === 4) {
        //     plant = createAsparagus() * 4 
        //     plant = createSoybean() * 4
        // } else if (plant.output === 6) {
        //     plant = createCorn() * 3
        //     plant = createWheat() * 6
        // } else if (plant.output === 2) {
        //     plant = createPotato() * 2
        // } else if (plant.output === 3) {
        //     plant = createSunflower() * 3
        // } 
        // harvestedPlants.push(plant)    

 

