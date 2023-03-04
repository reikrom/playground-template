import fetch from 'cross-fetch'

const hello = 'world345'

fetch('https://www.google.com')
  .then(res => res.text())
  .then(data => console.log(data.split('').slice(0, 115).join('')))

console.log(hello)
