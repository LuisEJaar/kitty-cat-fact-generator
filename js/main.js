document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api?`)
  const data = await res.json()

  //Out with the old
  const cardContainer = document.querySelector('.card')
  const oldCard = document.querySelector('#catFact')
  cardContainer.removeChild(oldCard)

  //In with the new
  const newFact = document.createElement('h2')
  newFact.setAttribute('id','catFact')
  newFact.textContent = data
  document.querySelector('.card').appendChild(newFact)
}