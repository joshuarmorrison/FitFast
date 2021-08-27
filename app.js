let calorie = 0
let globalmultiplier = 0

function mine(){
calorie++;
calorie += globalmultiplier 
draw()
}
function draw(){
    document.getElementById("counter").innerText=calorie.toString()
}

function drawinventory(){

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
  };
  
  let automaticUpgrades = {
    fatburner: {
      price: 500,
      quantity: 0,
      multiplier: 25
    },
    superburn: {
        price: 1000,
        quantity: 0,
        multiplier: 50
    }
  };
