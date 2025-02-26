var button = document.getElementById("btn");
var result = document.getElementById("res");

function rollDice() {
  var roll = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;
  var res = document.getElementById("result");
  var res2 = document.getElementById("result2");

  
  res.style.animation = "none";
  res2.style.animation = "none";
  
  setTimeout(() => {
    res.style.animation = "rotate-scale-up 1s ease-in-out";
    res2.style.animation = "rotate-scale-up 1s ease-in-out";
  }, 10);


  res.style.display = "block";
  res2.style.display = "block";
  res.innerHTML = roll;
  res2.innerHTML = roll2;

  var newRes = roll + roll2;

  var formattedSum = String(newRes).padStart(2, "0");

  result.innerHTML = formattedSum;
 
}

button.addEventListener("click", rollDice);
