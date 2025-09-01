// Segunda Atividade

let notes = []
let sum = 0
let input = ""
let note = 0


for (let i = 1; i <= 5; i++) {
    do {
        input = prompt(`Enter your note ${i}: `)
        note = Number(input)
    } while ( input === "" || Number.isNaN(note) || note < 0)
    notes.push(note)
    sum += note
}

let average = sum / notes.length
console.log(`Your average is ${average.toFixed(1)}`)




