//Create an empty array to add seeds to.
//Use the .push method in the addPlant function to add seed objects to the plantField array.
//I will attempt to pass the seed functions through the addPlant function.
//Use the .push method on the seed function.
//Object will pass through addPlant. Object will be added to plantField. Pass addPlant through usePlants.

const plants = []
export const addPlant = (seedObject) => {
     if (Array.isArray(seedObject)) {
        for (const seed of seedObject) {
            plants.push(seedObject)
        }
        } else {
            plants.push(seedObject)
        }
    return plants
}

export const usePlants = () => {
    return plants.map((seedObject) => ({...seedObject}))
}