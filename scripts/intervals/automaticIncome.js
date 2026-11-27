// Bread.
import { BASEUPGRADE3COST, UPGRADE3AUTOBREADAMOUNT, UPGRADE4AUTOBREADAMOUNT } from "../constants.js"
import Data from "../utils/data.js"
import NumberHelper from "../utils/number.js"

let breadCounter = document.getElementById("breadCounter")
setInterval(() => {
    bread += ((upgrade3Level - 1) * UPGRADE3AUTOBREADAMOUNT) + ((upgrade4Level - 1) * UPGRADE4AUTOBREADAMOUNT)
    breadCounter.textContent = NumberHelper.Format(bread)

    Data.Save()
}, 1000)