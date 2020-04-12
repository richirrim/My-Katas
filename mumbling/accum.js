// ✅ Kata Completada y validada por Codeer Wars



/*  Mi solucón con buenas prácticas. 
*   ---------------------------------------*/
const accum = (textRandom) => {
    let acount='', letterList = []

    textRandom.split('').forEach((item, index)=>{
        ++index
        for(let i=0; i < index; i++) {
            (i === 0) ? acount+=item.toUpperCase() : acount+=item.toLowerCase()
        }
        letterList.push(acount)
        acount = '' 
    })
    return letterList.join('-')
};


/*  Mi solución creativa
*   ---------------------------*/
const accum2 = (textRandom) => {
    let acount=''

    return textRandom.split('').map((item, index) => {
        ++index, acount = '' 

        for (let i=0; i < index; i++) {
            (i === 0) ? acount+=item.toUpperCase() : acount+=item.toLowerCase()
        }
        return acount
    }).join('-')
};