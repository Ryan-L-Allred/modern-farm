import { usePlants } from './field.js'

export const catalog = (harvestedFood) => {
    let htmlString = '<main class="container">'
    for (const food of harvestedFood) {
        htmlString += `
        <section class="plant">${food.type}</section>`
    }
    htmlString += `</main>`
    return htmlString
}