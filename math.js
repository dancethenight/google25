Math.swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]]

Math.gcd = (...a) => {
    let _gcd = (x, y) => {
        while (y !== 0) {
            let z = x % y
            x = y, y = z
        }

        return x
    }

    return a.reduce((x, y) => _gcd(x, y))
}

Math.lcm = (...a) => {
    return a.reduce((x, y) => x / Math.gcd(x, y) * y)
}

Math.arrayLowerBound = (a, x) => {
    let lo = 0, hi = a.length - 1
    while (lo + 1 < hi) {
        let md = (lo + hi) >> 1
        if (a.at(md) < x)
            lo = md + 1
        else
            hi = md
    }

    if (a.at(lo) >= x) return lo
    if (a.at(hi) >= x) return hi
    return -1
}
