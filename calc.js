var keys = document.querySelectorAll(".button");
var operators = ["+", "-", "x", "÷"];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function (e) {
    var input = document.querySelector(".display");
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;

    if (btnVal == "C") {
      input.innerHTML = "";
      decimalAdded = false;
    } 
    
    else if (btnVal == "=") {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];

      equation = equation.replace(/x/g, "*").replace(/÷/g, "/");
 
      if (operators.indexOf(lastChar) > -1 || lastChar == ".")
        equation = equation.replace(/.$/, "");

      if (equation) input.innerHTML = eval(equation);
 
      decimalAdded = false;
    } 
    
    else if (operators.indexOf(btnVal) > -1) {
      var lastChar = inputVal[inputVal.length - 1];

      if (inputVal != "" && operators.indexOf(lastChar) == -1)
        input.innerHTML += btnVal;
      else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;

      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded = false;
    } 
    
    else if (btnVal == ".") {
      if (!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }

    else if (btnVal == "X") { // Assuming "X" represents multiplication
      var inputText = input.innerHTML;
      input.innerHTML = inputText.slice(0, -1); // Remove the last character
      decimalAdded = false;
  }
  
    else {
      input.innerHTML += btnVal;
    }

    // prevent page jumps
    e.preventDefault();
  };
}

  let zero = document.querySelector(".no-0");
  let a = document.querySelector(".no-1");
  let b = document.querySelector(".no-2");
  let c = document.querySelector(".no-3");
  let d = document.querySelector(".no-4");
  let e = document.querySelector(".no-5");
  let f = document.querySelector(".no-6");
  let g = document.querySelector(".no-7");
  let h = document.querySelector(".no-8");
  let icon = document.querySelector(".no-9");
  let pre = document.querySelector(".percentage");
  let equal = document.querySelector(".equal");
  let sub = document.querySelector(".sub");
  let add = document.querySelector(".add");
  let divide = document.querySelector(".divide");
  let C = document.querySelector(".C");
  let multi = document.querySelector(".multi");
  let dot = document.querySelector(".dot");
  let cut = document.querySelector(".cut");

addEventListener('keydown', function(event){
    if(event.key === '0')
    {
        event.preventDefault();

        zero.click();
    }

    else if(event.key === '1')
    {
        event.preventDefault();

        a.click();
    }

    else if(event.key === '2')
    {
        event.preventDefault();

        b.click();
    }

    else if(event.key === '3')
    {
        event.preventDefault();

        c.click();
    }
    else if(event.key === '4')
    {
        event.preventDefault();

        d.click();
    }
    else if(event.key === '5')
    {
        event.preventDefault();

        e.click();
    }
    else if(event.key === '6')
    {
        event.preventDefault();

        f.click();
    }
    else if(event.key === '7')
    {
        event.preventDefault();

        g.click();
    }
    else if(event.key === '8')
    {
        event.preventDefault();

        h.click();
    }
    else if(event.key === '9')
    {
        event.preventDefault();

        icon.click();
    }
    else if(event.key === 'Enter')
    {
        event.preventDefault();

        equal.click();
    }
    else if(event.key === 'Escape')
    {
        event.preventDefault();

        C.click();
    }
   
    else if(event.key === '+')
    {
        event.preventDefault();

        add.click();
    }
    else if(event.key === '-')
    {
        event.preventDefault();

        sub.click();
    }
    else if(event.key === '.')
    {
        event.preventDefault();

        dot.click();
    }
    else if(event.key === '/')
    {
        event.preventDefault();

        divide.click();
    }
    else if(event.key === 'Backspace')
    {
        event.preventDefault();

        cut.click();
    }
    else if(event.key === '*')
    {
        event.preventDefault();

        multi.click();
    }
})
