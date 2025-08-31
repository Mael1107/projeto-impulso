let notes = []
let sum = 0
let note = 0

for (let i = 1; i <= 5; i++) {
    do {
        note = Number(prompt(`Enter your note ${i}: `))
    } while ( !note || Number.isNaN(note) || note < 0)
    notes.push(note)
    sum += note
}

let average = sum / notes.length
console.log(`Your average is ${average.toFixed(1)}`)




