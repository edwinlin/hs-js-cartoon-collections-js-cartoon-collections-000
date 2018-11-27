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
  // var array = []

  // planeteerCalls.forEach(function(call){
  //   array.push(call.toUpperCase() + "!")
  // })

  // return array
  return planeteerCalls.map(function(call){
    return call.toUpperCase() + "!"
  })
}

function longPlaneteerCalls(words) {
for (var i of words){
if (i.length > 4){
  return true;
}
else if (i.length <= 4){
  return false;
}
}
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