export const getQuote = () =>
  fetch('http://api.quotable.io/random').then(response => response.json())
