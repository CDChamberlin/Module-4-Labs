const now = moment();
const birth = moment("1997-05-15")

const day = now.diff(birth, 'days') // answers first problem

document.getElementById('days').innerHTML = day + 'days';