// 👁‍🗨 Soluciones creativas de otros programadores


// Solution 1
function list1(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
}


// Solution 2
function list2(names){
    var last = names.pop() || { name: '' }
    result = names.map(function(n) { return n.name }).join(', ')
    return result ? result + ' & ' + last.name : last.name
}

// Output
array = list1([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])
console.log(array)