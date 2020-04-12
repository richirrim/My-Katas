// ✅ Kata Completada y validada por Codeer Wars



const orderedCount = function(text) {
    let occurrencesList = []
    let arrayTupla = []
    let occurrencesNumber = 0
    let characterExists = false
    let occurrencesListLen 
    
    
    for (const letter of text) {
        occurrencesListLen = occurrencesList.length
        arrayTupla.push(letter)
        arrayTupla.push(occurrencesNumber)
       
        if (occurrencesListLen) {
            for (let item of occurrencesList) {
                characterExists = item.includes(arrayTupla[0])
                if (characterExists) break
            }
        }
        
        if (!characterExists) {
            for (let letter of text) { if (arrayTupla[0] === letter) arrayTupla[1]++ }
            occurrencesList.push(arrayTupla)
        }
        arrayTupla = []
        occurrencesNumber = 0
    }
    return occurrencesList
}

console.log(orderedCount('abracadabra'))
// console.log(orderedCount('Code Wars'))
// console.log(orderedCount('222'))
