export function convertToPersionDate(curentDate: Date) {
    const date = new Date(curentDate)
    const persionDate = date.toLocaleDateString("fa-IR")

    const array = persionDate.split("/")
    return `${array.at(0)}/${array.at(1)?.padStart(2, "0")}/${array.at(2)?.padStart(2, "0")}`
}