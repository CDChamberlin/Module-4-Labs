const now = moment();
const london = moment.utc()
const birth = moment("1997-05-15");

const day = now.diff(birth, "days"); // answers first problem

document.getElementById("days").innerHTML = day + "days";

function eval(event) {
  let closest = "";
  event.preventDefault();
  const date1 = moment(document.getElementById("num1").value, "MM-DD-YYYY");
  const date2 = moment(document.getElementById("num2").value, "MM-DD-YYYY");
  if (Math.abs(now.diff(date1) < Math.abs(now.diff(date2)))) closest = date1;
  else closest = date2;
  document.getElementById('result').value = closest
  return false;
}

document.getElementById('london').innerHTML = london
