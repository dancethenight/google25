Math.gcd = (a, b) => { // of 2 no.s how for an array?
    // check type somehow
    if (b === 0) {
        return a
    }
    return Math.gcd(b, a % b)
}
