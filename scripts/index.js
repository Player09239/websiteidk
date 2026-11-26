let upgrade1CostMulti = 1.5

window.onload=function(){
    
    let breadCounter = document.getElementById('breadCounter')
    let breadBtn = document.getElementById('breadButton')
    let upgrade1LevelUI = document.getElementById('upgrade1Level')
    let upgrade1Button = document.getElementById('upgrade1Button')

    breadBtn.addEventListener("click", () => {
        bread += upgrade1Level
        breadCounter.textContent = `Bread: ${bread}`
        console.log(`Current amt of bread: ${bread}`)
    })

    upgrade1Button.addEventListener("click", () => {
        if (bread >= upgrade1Cost) {
            bread -= upgrade1Cost
            upgrade1Level++

            breadCounter.textContent = `Bread: ${bread}`
            upgrade1LevelUI.textContent = `Lv. ${window.upgrade1Level}`

            upgrade1Cost = Math.floor(upgrade1Cost * upgrade1CostMulti)

            upgrade1Button.textContent = `Buy | ${upgrade1Cost} Bread`
        }
    })

}