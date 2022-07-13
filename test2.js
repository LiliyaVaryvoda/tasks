// string reverse

function reverseString(str){
    str2 = str.split("").reverse().join("")
    console.log(str2)
    return str2
}

reverseString("Hello world!")

// fizz buzz

for (let i = 1; i < 101; i++){
    if (i%15===0){
        console.log("fizzbuzz")
    } else if ( i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}
