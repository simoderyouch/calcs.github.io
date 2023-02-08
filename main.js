const btn = document.querySelectorAll(".num");
const op = document.querySelectorAll(".op");
const text = document.querySelector(".text");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const del = document.querySelector(".del");
const h = document.querySelector(".h");
const body = document.querySelector(".cn");
const main = document.querySelector(".main");
var a = 0;
var b = 0;
var result = 0;
var operation = " ";
var stop = false;
function check() {
  !stop ? (a = Number(text.innerHTML)) : (b = Number(text.innerHTML));
}

del.addEventListener("click", function () {
  text.innerHTML = text.innerHTML.slice(0, -1);
  check();
  if (text.innerHTML.length === 0) {
    text.innerHTML = "0";
    check();
  }
  console.log(a);
  console.log(b);
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (text.innerHTML === "0") {
      if (btn[i].value === ".") {
        text.innerHTML = text.innerHTML + btn[i].value;
      } else {
        text.innerHTML = btn[i].value;
      }
    } else {
      text.innerHTML = text.innerHTML + btn[i].value;
    }

    check();

    if (a !== 0 && stop === false) {
      a = Number(text.innerHTML);
    } else {
      b = Number(text.innerHTML);
    }
    console.log(a);
    console.log(b);
  });
}

reset.addEventListener("click", function () {
  text.innerHTML = "0";
  operation = " ";
  a = 0;
  stop = false;
  b = 0;
});

for (let j = 0; j < op.length; j++) {
  op[j].addEventListener("click", function () {
    text.innerHTML = "0";
    stop = true;

    operation = op[j].value;
  });
}

equal.addEventListener("click", function () {
  switch (operation) {
    case "+":
      result = a + b;

      break;
    case "-":
      result = a - b;

      break;
    case "x":
      result = a * b;

      break;

    case "/":
      if (b === 0) {
        text.innerHTML = "impossible";
        setTimeout(function () {
          text.innerHTML = "0";
        }, 2000);
      } else {
        result = a / b;

        break;
      }
  }

  if (isFloat(result)) {
    text.innerHTML = result.toFixed(2).toString();
  } else {
    text.innerHTML = result.toString();
  }

  operation = " ";
  a = result;
  b = 0;
  stop = false;
  if (text.innerHTML === "0") {
    stop = false;
  }
});
function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

const radios = document.querySelectorAll("[name='toggle']");
const circle = document.querySelector("#round");
const swit = document.querySelector(".switch");
const sw = document.querySelector(".sw-flex");
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", function () {
    if (radios[i].checked) {
      circle.className = radios[i].value;
      btn.forEach((bt) => {
        bt.classList = "num " + radios[i].value;
      });
      op.forEach((op) => {
        op.classList = "op " + radios[i].value;
      });

      del.classList = "del " + radios[i].value;
      swit.classList = "switch  " + radios[i].value;
      reset.classList = "reset " + radios[i].value;
      equal.classList = "equal  " + radios[i].value;
      text.classList = "text " + radios[i].value;
      body.classList = "body " + radios[i].value;
      h.classList = "h " + radios[i].value;
      main.classList = "main " + radios[i].value;
      sw.classList = "sw-flex " + radios[i].value;
    }
  });
}
