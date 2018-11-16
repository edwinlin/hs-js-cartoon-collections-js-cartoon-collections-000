function dwarfRollCall(dwarves) {
  var string = ""
  var i = 0
  while (i < dwarves.length){
    string += `${i+1}. ${dwarves[i]} `
    i++
  }
  return string
}

function summonCaptainPlanet(planeteerCalls){
  var array = []
  var i = 0
  while(i < planeteerCalls.length){
    array.push(planeteerCalls[i].toUpperCase() + "!")
    i++
  }
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
  
  // var i = 0
  // while(i < foods.length){
  //   var j = 0
  //   while(j<cheeses.length){
  //     if(foods[i] === cheeses[j]){
  //       return foods[i]
  //     }
  //     j++
  //   }
  //   i++
  // }
  
  // var array = []
  // foods.forEach(function(food){
  //   cheeses.forEach(function(cheese){
  //     // console.log(food + " " + cheese)
  //     // console.log(food === cheese)
  //     if(food === cheese){
  //       array.push(food)
  //     }
  //   })
  // })
  // if (array.length > 0){
  //   return array[0]
  // }
  // forEach method does not break during loop

  var i = 0
  while(i<foods.length){
    if (cheeses.includes(foods[i])){
      return foods[i]
    }
    i++
  }
  return 'no cheese!'
}
