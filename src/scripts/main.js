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

//The addPlants function is already doing the work independently from the usePlants function.
//By returning the plants array in the usePlants function it will display the work that addPlants is doing.
// const seedsPlanted = plantSeeds(yearlyPlan)
// const plantAdded = addPlant(seedsPlanted)
// addPlant(asparagusSeed)
// addPlant(cornSeed)
// addPlant(potatoSeed)
const yearlyPlan = createPlan()
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const seedsPlanted = plantSeeds(yearlyPlan)

const useThePlants = usePlants()
console.log(yearlyPlan)
console.log(seedsPlanted)








