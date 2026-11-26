export default class NumberHelper {
    static Format(n) {
        if (n >= 1e9) return `${(n/1e9).toFixed(2)}b`
        else if (n >= 1e6) return `${(n/1e6).toFixed(2)}m`
        else if (n >= 1e3) return `${(n/1e3).toFixed(2)}k`
        else return n
    }
}