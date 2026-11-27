import NumberHelper from "./utils/number.js"
import Data from "./utils/data.js"
import { UPGRADE1BREADAMOUNT, UPGRADE2BREADAMOUNT, UPGRADE3AUTOBREADAMOUNT, UPGRADE4AUTOBREADAMOUNT, UPGRADECOSTMULTI } from "./constants.js"

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
    let upgrade4LevelUI = document.getElementById('upgrade4Level')
    let upgrade4Button = document.getElementById('upgrade4Button')

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
    upgrade4LevelUI.textContent = `Lv. ${window.upgrade4Level}`
    upgrade4Button.textContent = `Buy | ${NumberHelper.Format(upgrade4Cost)} Bread`

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
        // bread += Math.floor((upgrade1Level + (3 * (upgrade2Level - 1))) * (combo + 1)) // 1 bread per click for upgrade1
        bread += Math.floor(
            ((upgrade1Level * UPGRADE1BREADAMOUNT) +
            ((upgrade2Level - 1) * UPGRADE2BREADAMOUNT)) *
            (combo + 1)
        )
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

            upgrade1Cost = Math.floor(upgrade1Cost * UPGRADECOSTMULTI)

            upgrade1Button.textContent = `Buy | ${NumberHelper.Format(upgrade1Cost)} Bread`

            Data.Save()
        } else alert(`You don't have enough bread! (Need ${upgrade1Cost - bread} more bread)`)
    })

    upgrade2Button.addEventListener("click", () => {
        if (bread >= upgrade2Cost) {
            bread -= upgrade2Cost
            upgrade2Level++

            breadCounter.textContent = NumberHelper.Format(bread)
            upgrade2LevelUI.textContent = `Lv. ${upgrade2Level}`

            upgrade2Cost = Math.floor(upgrade2Cost * UPGRADECOSTMULTI)

            upgrade2Button.textContent = `Buy | ${NumberHelper.Format(upgrade2Cost)} Bread`

            Data.Save()
        } else alert(`You don't have enough bread! (Need ${upgrade2Cost - bread} more bread)`)
    })

    upgrade3Button.addEventListener("click", () => {
        if (bread >= upgrade3Cost) {
            bread -= upgrade3Cost
            upgrade3Level++

            breadCounter.textContent = NumberHelper.Format(bread)
            upgrade3LevelUI.textContent = `Lv. ${upgrade3Level}`

            upgrade3Cost = Math.floor(upgrade3Cost * UPGRADECOSTMULTI)

            breadPerSecondCounter.textContent = `${((upgrade3Level - 1) * UPGRADE3AUTOBREADAMOUNT) + ((upgrade4Level - 1) * UPGRADE4AUTOBREADAMOUNT)} Bread per second`
            upgrade3Button.textContent = `Buy | ${NumberHelper.Format(upgrade3Cost)} Bread`

            Data.Save()
        } else alert(`You don't have enough bread! (Need ${upgrade3Cost - bread} more bread)`)
    })

    upgrade4Button.addEventListener("click", () => {
        if (bread >= upgrade4Cost) {
            bread -= upgrade4Cost
            upgrade4Level++

            breadCounter.textContent = NumberHelper.Format(bread)
            upgrade4LevelUI.textContent = `Lv. ${upgrade4Level}`

            upgrade4Cost = Math.floor(upgrade4Cost * UPGRADECOSTMULTI)

            breadPerSecondCounter.textContent = `${((upgrade3Level - 1) * UPGRADE3AUTOBREADAMOUNT) + ((upgrade4Level - 1) * UPGRADE4AUTOBREADAMOUNT)} Bread per second`
            upgrade4Button.textContent = `Buy | ${NumberHelper.Format(upgrade4Cost)} Bread`

            Data.Save()
        } else alert(`You don't have enough bread! (Need ${upgrade4Cost - bread} more bread)`)
    })

}