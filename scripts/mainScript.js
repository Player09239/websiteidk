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
    let upgrade3LevelUI = document.getElementById('upgrade3Level')
    let upgrade3Button = document.getElementById('upgrade3Button')
    let breadPerSecondCounter = document.getElementById('breadPerSecondCounter')

    let combo1 = document.getElementById('combo1')
    let combo2 = document.getElementById('combo2')
    let combo3 = document.getElementById('combo3')
    let combo4 = document.getElementById('combo4')
    let combo5 = document.getElementById('combo5')

    breadCounter.textContent = NumberHelper.Format(bread)
    upgrade1LevelUI.textContent = `Lv. ${window.upgrade1Level}`
    upgrade1Button.textContent = `Buy | ${NumberHelper.Format(upgrade1Cost)} Bread`
    upgrade2LevelUI.textContent = `Lv. ${window.upgrade2Level}`
    upgrade2Button.textContent = `Buy | ${NumberHelper.Format(upgrade2Cost)} Bread`
    upgrade3LevelUI.textContent = `Lv. ${window.upgrade3Level}`
    upgrade3Button.textContent = `Buy | ${NumberHelper.Format(upgrade3Cost)} Bread`

    breadPerSecondCounter.textContent = `${upgrade3Level - 1} Bread per second`

    function showCombo() {
        if (combo >= 5) {
            combo1.style.opacity = 1
            combo2.style.opacity = 1
            combo3.style.opacity = 1
            combo4.style.opacity = 1
            combo5.style.opacity = 1
        } else if (combo >= 4) {
            combo1.style.opacity = .5
            combo2.style.opacity = 1
            combo3.style.opacity = 1
            combo4.style.opacity = 1
            combo5.style.opacity = 1
        } else if (combo >= 3) {
            combo1.style.opacity = .5
            combo2.style.opacity = .5
            combo3.style.opacity = 1
            combo4.style.opacity = 1
            combo5.style.opacity = 1
        } else if (combo >= 2) {
            combo1.style.opacity = .5
            combo2.style.opacity = .5
            combo3.style.opacity = .5
            combo4.style.opacity = 1
            combo5.style.opacity = 1
        } else if (combo >= 1) {
            combo1.style.opacity = .5
            combo2.style.opacity = .5
            combo3.style.opacity = .5
            combo4.style.opacity = .5
            combo5.style.opacity = 1
        } else if (combo >= 0) {
            combo1.style.opacity = .5
            combo2.style.opacity = .5
            combo3.style.opacity = .5
            combo4.style.opacity = .5
            combo5.style.opacity = .5
        }
    }

    showCombo()

    breadBtn.addEventListener("click", () => {
        bread += Math.floor((upgrade1Level + (3 * upgrade2Level)) * (combo + 1)) // 1 bread per click for upgrade1
        breadCounter.textContent = NumberHelper.Format(bread)
        combo += 0.1
        if (combo > 5) {
            combo = 5
        }

        showCombo()
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

    upgrade3Button.addEventListener("click", () => {
        if (bread >= upgrade3Cost) {
            bread -= upgrade3Cost
            upgrade3Level++

            breadCounter.textContent = NumberHelper.Format(bread)
            upgrade3LevelUI.textContent = `Lv. ${upgrade3Level}`

            upgrade3Cost = Math.floor(upgrade3Cost * upgradeCostMulti)

            breadPerSecondCounter.textContent = `${upgrade3Level - 1} Bread per second`
            upgrade3Button.textContent = `Buy | ${NumberHelper.Format(upgrade3Cost)} Bread`

            Data.Save()
        }
    })

}