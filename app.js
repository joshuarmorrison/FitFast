let steps = 0
let globalmultiplier = 0

function mine(){
steps++;
steps += Math.floor(globalmultiplier)
draw()
}
function draw(){
    document.getElementById("counter").innerText=steps.toString()
}

function drawInventory(){
//NOTE for in loop, document
document.getElementById("chicken").innerText=clickUpgrades.chicken.quantity.toString()
document.getElementById("salmon").innerText=clickUpgrades.salmon.quantity.toString()
document.getElementById("protein").innerText=automaticUpgrades.proteinshake.quantity.toString()
document.getElementById("steak").innerText=automaticUpgrades.steak.quantity.toString()
}
function buyChicken(){
    if(steps >= clickUpgrades.chicken.price){
        clickUpgrades.chicken.quantity++
    steps -= clickUpgrades.chicken.price
    globalmultiplier += clickUpgrades.chicken.multiplier
    }
    
    draw()
    drawInventory()
}
function buySalmon(){
    if(steps >= clickUpgrades.salmon.price){
        clickUpgrades.salmon.quantity++
    steps-=clickUpgrades.salmon.price
    globalmultiplier += clickUpgrades.salmon.multiplier
    }
     clickUpgrades.salmon.price *= 2
    draw()
    drawInventory()
}
function buyProtein(){
    if(steps >= automaticUpgrades.proteinshake.price){
        automaticUpgrades.proteinshake.quantity++
    steps-=automaticUpgrades.proteinshake.price
    globalmultiplier += automaticUpgrades.proteinshake.multiplier
    }
     automaticUpgrades.proteinshake.price *= 2
    draw()
    drawInventory()
}
function buySteak(){
    if(steps >= automaticUpgrades.steak.price){
        automaticUpgrades.steak.quantity++
    steps-=automaticUpgrades.steak.price
    globalmultiplier += automaticUpgrades.steak.multiplier
    }
    automaticUpgrades.steak.price *= 3
    draw()
    drawInventory()
}

let clickUpgrades = {
    chicken: {
      price: 25,
      quantity: 0,
      multiplier: 5
    },
    salmon: {
        price: 75,
        quantity: 0,
        multiplier: 8
    },
   
    }

  
  let automaticUpgrades = {
    proteinshake: {
        price: 125,
        quantity: 0,
        multiplier: 10
    },
    steak: {
        price: 750,
        quantity: 0,
        multiplier: 30
  }
  }
  function collectAutomaticUpgrades(){
      let shake = automaticUpgrades.proteinshake
      steps += (shake.quantity*shake.multiplier)
      let steak= automaticUpgrades.steak
      steps += (steak.quantity*steak.multiplier)
      draw()
  }
  setInterval( collectAutomaticUpgrades, 3000);
  
  