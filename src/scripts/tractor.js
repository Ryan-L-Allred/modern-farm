//Array gets passed through plantSeeds function.
//Iterate through the parent array and the child arrays.
//Iterate while passing through.
//Invoke seed functions in the plantSeeds function?
//These seeds will be added to the plantField array.
//How do we add the seed to the plantField Array?
//Incorporate the addPlants and usePlants functions. Remember those have been imported to the main.js module.
//Pass the plan array through plantSeeds as an argument. 
//Invoke addPlant function within plantSeeds function as an argument.
//Pass addPlant through usePlants and then console.log the variable usePlants is stored in. <---NO!

import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants} from './field.js'
createAsparagus()


export const plantSeeds = (plantingPlan) => { //This function iterates through the plan array as it is being passed through.
    for (const row of plantingPlan) { //This loop iterates through the arrays within the plan array.
        for (let seeds of row) {      //This loops through the strings in the different arrays
         if (seeds === "Asparagus") { 
            seeds = createAsparagus()
          } else if (seeds === "Potato") { //Every time the loop comes across a 'potato' string, it creates a potato object.
            seeds = createPotato()         //This function is invoked every time the loop finds the potato string.
          } else if (seeds === "Soybean") { 
             seeds = createSoybean()
          } else if (seeds === "Sunflower") {
             seeds = createSunflower()
          } else if (seeds === "Wheat") {
             seeds = createWheat()
          } else if (seeds === "Corn") {
             seeds = createCorn()
          }
             addPlant(seeds) //addPlant function is invoked within plantSeeds function. Each of these seeds is added to the plants array.
        }
       
    } //This function also does not need a return statement. Putting a return statement means the function stops processing.
      //Thats why only one object was being logged to the console. It would iterate through the array, but then stop once an object was found.
}    
  







//       let plantSeed;
    //       switch (plantSeed) {
    //         case "Asparagus":
    //             plantSeed = createAsparagus()
    //             break;
    //         case "Potato":
    //             plantSeed = createPotato()
    //             break;
    //         case "Corn":
    //             plantSeed = createCorn()
    //             break;
    //         case "Soybean":
    //             plantSeed = createSoybean()
    //             break;
    //         case "Sunflower":
    //             plantSeed = createSunflower()
    //             break;
    //         case "Wheat":
    //             plantSeed = createWheat()
    //             break;
    //       }
    //       return addPlant(plantSeed)
    //     }
    //  }
    //  return addPlant(plantSeed)
//}

            
 