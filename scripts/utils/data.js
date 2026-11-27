import { BASEUPGRADE1COST, BASEUPGRADE2COST, BASEUPGRADE3COST, BASEUPGRADE4COST } from "../constants.js"

export default class Data {
    static Save() {
        localStorage.setItem("data",
            JSON.stringify({
                bread: bread,
                upgrades: {
                    upgrade1: {
                        cost: upgrade1Cost,
                        level: upgrade1Level
                    },
                    upgrade2: {
                        cost: upgrade2Cost,
                        level: upgrade2Level
                    },
                    upgrade3: {
                        cost: upgrade3Cost,
                        level: upgrade3Level
                    },
                    upgrade4: {
                        cost: upgrade4Cost,
                        level: upgrade4Level
                    }
                }
            })
        )
    }
    
    static Load() {
        let data = JSON.parse(localStorage.getItem("data"))
        console.log(data)
        bread = data?.bread || 0
        
        upgrade1Cost = data?.upgrades?.upgrade1?.cost || BASEUPGRADE1COST
        upgrade1Level = data?.upgrades?.upgrade1?.level || 1

        upgrade2Cost = data?.upgrades?.upgrade2?.cost || BASEUPGRADE2COST
        upgrade2Level = data?.upgrades?.upgrade2?.level || 1

        upgrade3Cost = data?.upgrades?.upgrade3?.cost || BASEUPGRADE3COST
        upgrade3Level = data?.upgrades?.upgrade3?.level || 1

        upgrade4Cost = data?.upgrades?.upgrade4?.cost || BASEUPGRADE4COST
        upgrade4Level = data?.upgrades?.upgrade4?.level || 1
    }
}