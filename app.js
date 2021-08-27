let steps = 0
let globalmultiplier = 0

function mine(){
steps++;
steps += globalmultiplier 
draw()
}
function draw(){
    document.getElementById("counter").innerText=steps.toString()
}

function drawInventory(){
//NOTE for in loop, document
document.getElementById("chicken").innerText=clickUpgrades.chicken.quantity.toString()
}
function buyChicken(){
    if(steps <50){
        return ("Not enough steps")
    }
    clickUpgrades.chicken.quantity++
    steps -= clickUpgrades.chicken.price
    globalmultiplier += clickUpgrades.chicken.multiplier
    draw()
    drawInventory()
}

let clickUpgrades = {
    chicken: {
      price: 50,
      quantity: 0,
      multiplier: 1
    },
    salmon: {
        price: 200,
        quantity: 0,
        multiplier: 1.25
    },
   
    }

  
  let automaticUpgrades = {
    proteinshake: {
        price: 400,
        quantity: 0,
        multiplier: 2
    },
    steak: {
        price: 800,
        quantity: 0,
        multiplier: 2.25
  }
  }
  function collectAutomaticUpgrades(){
      let shake = automaticUpgrades.proteinshake
      steps += (shake.quantity*shake.multiplier)

  }
  setInterval( collectAutomaticUpgrades, 3000);