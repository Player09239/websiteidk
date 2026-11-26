import NumberHelper from "./utils/number.js"
import Data from "./utils/data.js"

let upgradeCostMulti = 1.5

let upgrade2BreadMulti = 3

window.onload=function(){
    Data.Load()
    let breadCounter = document.getElementById('breadCounter')
    let breadBtn = document.getElementById('breadButton')
    let upgrade1LevelUI = document.getElementById('upgrade1Level')
    let upgrade1Button = document.getElementById('upgrade1Button')
    let upgrade2LevelUI = document.getElementById('upgrade2Level')
    let upgrade2Button = document.getElementById('upgrade2Button')

    breadCounter.textContent = NumberHelper.Format(bread)
    upgrade1LevelUI.textContent = `Lv. ${window.upgrade1Level}`
    upgrade1Button.textContent = `Buy | ${NumberHelper.Format(upgrade1Cost)} Bread`
    upgrade2LevelUI.textContent = `Lv. ${window.upgrade2Level}`
    upgrade2Button.textContent = `Buy | ${NumberHelper.Format(upgrade2Cost)} Bread`

    breadBtn.addEventListener("click", () => {
        bread += upgrade1Level + (3 * upgrade2Level)
        breadCounter.textContent = NumberHelper.Format(bread)
        
        Data.Save()
    })

    upgrade1Button.addEventListener("click", () => {
        if (bread >= upgrade1Cost) {
            bread -= upgrade1Cost
            upgrade1Level++

            breadCounter.textContent = NumberHelper.Format(bread)
            upgrade1LevelUI.textContent = `Lv. ${upgrade1Level}`

            upgrade1Cost = Math.floor(upgrade1Cost * upgradeCostMulti)

            upgrade1Button.textContent = `Buy | ${NumberHelper.Format(upgrade1Cost)} Bread`

            Data.Save()
        }
    })

    upgrade2Button.addEventListener("click", () => {
        if (bread >= upgrade2Cost) {
            bread -= upgrade2Cost
            upgrade2Level++

            breadCounter.textContent = NumberHelper.Format(bread)
            upgrade2LevelUI.textContent = `Lv. ${upgrade2Level}`

            upgrade2Cost = Math.floor(upgrade2Cost * upgradeCostMulti)

            upgrade2Button.textContent = `Buy | ${NumberHelper.Format(upgrade2Cost)} Bread`

            Data.Save()
        }
    })

}