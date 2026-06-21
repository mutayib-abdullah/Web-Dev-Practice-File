function calculateSum() {
    let a = Number(prompt("Enter your first number:"))
    let b = Number(prompt("Enter your second number:"))

    try {
        if (isNaN(a) || isNaN(b)) {
            throw new SyntaxError("Sorry not acceptable")
        }

        let sum = a + b
        alert(`The sum is : ${sum}`)
        return true
    }
    catch (error) {
        alert(error.message)
        return false
    }
    finally {
        console.log("Files are being closed")
    }
}

calculateSum()