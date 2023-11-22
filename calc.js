function eval(event) {
  event.preventDefault();
  let haveInputs = true;
  console.log("I work");
  console.log(parseFloat(document.getElementById("num1").value));
  alert(parseFloat(document.getElementById("num1").value) == NaN);
  if (parseFloat(document.getElementById("num1").value) == NaN) {
    alert("First number missing");
    haveInputs = false;
  }
  if (parseFloat(document.getElementById("num2").value) == NaN) {
    alert("Second number missing");
    haveInputs = false;
  }
  console.log(haveInputs);
  return false;
}

function reset(event) {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
