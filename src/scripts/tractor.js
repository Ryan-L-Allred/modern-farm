//Array gets passed through plantSeeds function.
//Iterate through the parent array and the child arrays.
//Iterate while passing through.
//Invoke seed functions in the plantSeeds function?
//These seeds will be added to the plantField array.
//How do we add the seed to the plantField Array?
//Incorporate the addPlants and usePlants functions. Remember those have been imported to the main.js module.
//Pass the plan array through plantSeeds as an argument. 
//Invoke addPlant function with plantSeeds function as an argument.
//Pass addPlant through usePlants and then console.log the variable usePlants is stored in. 

import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants} from './field.js'
createAsparagus()


export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const seeds of row) {
          let plantSeed;
          switch (plantSeed) {
            case "Asparagus":
                plantSeed = createAsparagus()
                break;
            case "Potato":
                plantSeed = createPotato()
                break;
            case "Corn":
                plantSeed = createCorn()
                break;
            case "Soybean":
                plantSeed = createSoybean()
                break;
            case "Sunflower":
                plantSeed = createSunflower()
                break;
            case "Wheat":
                plantSeed = createWheat()
                break;
          }
          return addPlant(plantSeed)
        }
     }
    //  return addPlant(plantSeed)
}

            
        //          if (seeds === "Asparagus") {
//             plantSeed = createAsparagus()
            
//          } else if (seeds === "Potato") {
//             plantSeed = createPotato()
            
//           } else if (seeds === "Soybean") {
//              plantSeed = createSoybean()
             
//           } else if (seeds === "Sunflower") {
//              plantSeed = createSunflower()
            
//           } else if (seeds === "Wheat") {
//              plantSeed = createWheat()
            
//           } else if (seeds === "Corn") {
//              plantSeed = createCorn()
            
//           }
//           addPlant(plantSeed)
//         }
//     }
//     return addPlant(plantSeed)
// }    