import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

//The addPlants function is already doing the work independently from the usePlants function.
//By returning the plants array in the usePlants function it will display the work that addPlants is doing.
// const seedsPlanted = plantSeeds(yearlyPlan)
// const plantAdded = addPlant(seedsPlanted)
// addPlant(asparagusSeed)
// addPlant(cornSeed)
// addPlant(potatoSeed)


const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)//Pass the plan array through plantSeeds for it to be iterated and then added to the plants array.
const useThePlants = usePlants() //Pass that operation through usePlants in order to create a copy of the plants array.
const plantsHarvested = harvestPlants(useThePlants)
catalog(plantsHarvested)


const parentHTML = document.querySelector(".container")
parentHTML.innerHTML = catalog(plantsHarvested)








