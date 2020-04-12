// ✅ Kata Completada y validada por Codeer Wars




/*  -------------------------------------
*   Mi solución (best practices 👊🤠) 
*   ------------------------------------*/
const list = (names) => {
    let lastName, listNames

    if (!names.length) return ''
    if (names.length === 1) return names[0].name

    lastName = names.pop()
    listNames = names.map(item => item.name).join(', ')

    return `${listNames} & ${lastName.name}`;
};


/*  -------------------------------------
*   Mi solución  creativa 😜❤
*   ------------------------------------*/
const list0 = (names) => {
    if (!names.length) return ''
    if (names.length === 1) return names[0].name

    const lastItem = names.pop()
    return `${names.map(item => item.name).join(', ')} & ${lastItem.name}`;
};

// Output
array = list0([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])
console.log(array)