function dwarfRollCall(dwarves) {
  var string = ""
  var i = dwarves.length/2
  while (i < dwarves.length){
    string += `${i+1}. ${dwarves[i]} `
    i++
  }
  return string
}

function summonCaptainPlanet(planeteerCalls){
  var array = []

  planeteerCalls.forEach(function(call){
    array.push(call.toUpperCase() + "!")
  })

  return array
}

function longPlaneteerCalls(words) {
  var i = 0
  while(i < words.length){
    if (words[i].length > 4){
      return true
    }
    i++
  }
  return false
}

function findTheCheese (foods) {
  var cheeses = ['cheddar', 'gouda', 'camembert']
  
  var i = 0
  while(i<foods.length){
    if (cheeses.includes(foods[i])){
      return foods[i]
    }
    i++
  }
  
  return 'no cheese!'
}

function wordsWithB(array){
  var newArray = []
  
  var i = 0
  while (i < array.length ) {
    if(array[i][0] === 'b'){
      newArray.push(array[i])
    }
    i++
  }
  
  return newArray
}
