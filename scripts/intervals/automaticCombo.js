let combo1 = document.getElementById('combo1')
let combo2 = document.getElementById('combo2')
let combo3 = document.getElementById('combo3')
let combo4 = document.getElementById('combo4')
let combo5 = document.getElementById('combo5')

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

setInterval(() => {
    combo -= .1
    if (combo < 0) {
        combo = 0
    }

    showCombo()
}, 400)