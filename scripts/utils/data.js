export default class Data {
    static Save() {
        localStorage.setItem("data",
            JSON.stringify({
                bread: bread,
                upgrades: {
                    upgrade1: {
                        cost: upgrade1Cost,
                        level: upgrade1Level
                    }
                }
            })
        )
    }
    
    static Load() {
        let data = JSON.parse(localStorage.getItem("data"))
        console.log(data)
        bread = data?.bread || 0
        
        upgrade1Cost = data?.upgrades.upgrade1.cost || 10
        upgrade1Level = data?.upgrades.upgrade1.level || 1
    }
}