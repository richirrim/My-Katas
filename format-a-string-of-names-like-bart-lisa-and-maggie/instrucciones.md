# 💛 Instrucciones

**Nombre de la Kata:** Format a string of names like 'Bart, Lisa & Maggie'
**Nivel:** *6 kyu*

**Description**
Given: an array containing hashes of names

Return: a string formatted as a list of names separated 
by commas except for the last two names, which should be 
separated by an ampersand.

    Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

**Traducido (Es)**

Dado: una matriz que contiene objetos de nombres

Return: un string formateado como una lista de nombres separados 
por comas, excepto los dos últimos nombres, que deben estar separados 
por un signo de unión.

    Nota: todos los objetos están prevalidados y solo contendrán AZ, az, '-' y '.'.


**💙 Example**

```js
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) // output: 'Bart, Lisa & Maggie'
list([ {name: 'Bart'}, {name: 'Lisa'} ]) // output: 'Bart & Lisa'
list([ {name: 'Bart'} ]) // output: 'Bart'
list([]) // output: ''
```