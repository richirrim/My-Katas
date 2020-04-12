// ❌ No completado en Code Wars.


 
/*  Mi solución con best practices. 
*   ---------------------------------------*/
const gooseFilter = birds => {
    'use strict'
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    let findGoose = false, index
    
    // Elimina los elementos repetidos en un array.
    birds = [...new Set(birds)]

    geese.forEach(goose => {
        for (let bird of birds) {
            if (goose === bird) {
                findGoose = true
                index = birds.indexOf(bird)
                break
            }
        }
        if (findGoose) birds.splice(index,1), findGoose = false
    })
    return birds
};

/**
*   ❌ Herrores pendientes por resolver
*   --------------------------------------------
*   La solución es correcta, solo que las aves que no sean gansos no 
*   deben de ser eliminiada sus copias.
*/





 /** 
 * Random test 29
 * Expected/Se esparaba: 
 *       ['Blue Swedish', 'Mallard', 'Barbary', 
 *      'Hook Bill', 'Hook Bill', 'Crested', 'Barbary', 'Hook Bill', 
 *      'Blue Swedish', 'Mallard', 'Mallard', 'Mallard', 'Crested', 
 *      'Mallard', 'Hook Bill', 'Blue Swedish', 'Crested', 'Mallard', '
 *      Blue Swedish', 'Mallard', 'Crested', 'Mallard'], 
 * instead got/En cambio se obtuvo: ['Blue Swedish', 'Mallard', 'Barbary', 'Hook Bill', 'Crested']
 * 
 *  Random test 31
 * Expected/Se esparaba: 
 *      ['Barbary', 'Hook Bill', 'Hook Bill', 
 *      'Barbary', 'Crested', 'Blue Swedish', 
 *      'Barbary', 'Crested', 'Blue Swedish', 'Hook Bill', 
 *      'Crested', 'Hook Bill', 'Hook Bill', 'Mallard'], 
 * instead got/En cambio se obtuvo: ['Barbary', 'Hook Bill', 'Crested', 'Blue Swedish', 'Mallard']
 */
