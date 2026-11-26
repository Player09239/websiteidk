// Bread.
import Data from "../utils/data.js"
import NumberHelper from "../utils/number.js"

let breadCounter = document.getElementById("breadCounter")
setInterval(() => {
    bread += upgrade3Level - 1
    breadCounter.textContent = NumberHelper.Format(bread)

    Data.Save()
}, 1000)