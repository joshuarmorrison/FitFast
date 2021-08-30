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
    Math.floor(clickUpgrades.chicken.price *= 1.25)
    draw()
    drawInventory()
}
function buySalmon(){
    if(steps >= clickUpgrades.salmon.price){
        clickUpgrades.salmon.quantity++
    steps-=Math.floor(clickUpgrades.salmon.price)
    globalmultiplier += clickUpgrades.salmon.multiplier
    }
     Math.floor(clickUpgrades.salmon.price *= 1.25)
    draw()
    drawInventory()
}
function buyProtein(){
    if(steps >= automaticUpgrades.proteinshake.price){
        automaticUpgrades.proteinshake.quantity++
    steps-=Math.floor(automaticUpgrades.proteinshake.price)
    globalmultiplier += automaticUpgrades.proteinshake.multiplier
    }
     Math.floor(automaticUpgrades.proteinshake.price *= 1.25)
    draw()
    drawInventory()
}
function buySteak(){
    if(steps >= automaticUpgrades.steak.price){
        automaticUpgrades.steak.quantity++
    steps-=Math.floor(automaticUpgrades.steak.price)
    globalmultiplier += automaticUpgrades.steak.multiplier
    }
    Math.floor(automaticUpgrades.steak.price *= 1.5)
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
        price: 300,
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
  
  