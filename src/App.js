import React from 'react';

import CardList from './components/CardList'
import Play from './components/Play'

function App() {
  const [name, setName] = React.useState('Player')

  const [deck, setDeck] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [hand, setHand] = React.useState([])

  const handTotal = hand.reduce(
    (acc, val) => acc + val, 0
  )

  const handleHit = () => {
    const randomCardIndex = Math.floor(Math.random() * deck.length)
    const randomCard = deck[randomCardIndex]
    setHand([...hand, randomCard])
    setDeck(deck.filter(card => card !== randomCard))
  }

  return (
    <>
      <h1>Hello {name}</h1>
      <input onChange={event => setName(event.target.value)} />
      <CardList message='Deck' list={deck} />
      <CardList message='My hand is' list={hand} />
      <Play
        handleHit={handleHit}
        handTotal={handTotal}
      />
    </>
  )
}

export default App;
