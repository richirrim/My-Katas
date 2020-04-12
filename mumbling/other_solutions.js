// 👁‍🗨 Soluciones creativas de otros programadores

// Cosas que no entendia y las investigue.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/repeat
// nota: Si al método .repeat() se le pasa un cero devuelve un string vacío. 'S'.repeat(0) // output: ''
// nota: Si le pasas un 1 devuelve la misma cadena. 'S'.repeat(1) // output: 'S'

// Solución 1
function accum (textRandom) {
    return textRandom.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}

//  Solución 2
function accum (textRandom) {
    return [...textRandom].map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-')
}
