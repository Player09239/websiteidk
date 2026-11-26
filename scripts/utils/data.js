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
                    }
                }
            })
        )
    }
    
    static Load() {
        let data = JSON.parse(localStorage.getItem("data"))
        console.log(data)
        bread = data?.bread || 0
        
        upgrade1Cost = data?.upgrades?.upgrade1?.cost || 10
        upgrade1Level = data?.upgrades?.upgrade1?.level || 1

        upgrade2Cost = data?.upgrades?.upgrade2?.cost || 175
        upgrade2Level = data?.upgrades?.upgrade2?.level || 1

        upgrade3Cost = data?.upgrades?.upgrade3?.cost || 300
        upgrade3Level = data?.upgrades?.upgrade3?.level || 1
    }
}