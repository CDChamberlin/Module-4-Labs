const form = document.querySelector("form");
//const log = document.querySelector("#log");

function eval(event) {
  event.preventDefault();
  document.getElementById('result').value = ""
  let haveInputs = true;
  const data = new FormData(form);
  const num1 = parseFloat(document.getElementById("num1").value)
  const num2 = parseFloat(document.getElementById("num2").value)
  console.log(data.get('operator'))
  
  if ((document.getElementById("num1").value.length) < 1) {
    alert("First number missing");
    haveInputs = false;
  }
 if ((document.getElementById("num2").value).length < 1) {
    alert("Second number missing");
    haveInputs = false;
  }
  if (haveInputs){ 
  switch(data.get('operator')){
case '+': result = num1+num2; break;
case '-': result = num1-num2; break;
case 'x': result = num1*num2; break;
case '/': result = num1/num2; break;}

  document.getElementById('result').value = result}
  return false;
}

function reset(event) {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
document.getElementById('result').value = ""

}
