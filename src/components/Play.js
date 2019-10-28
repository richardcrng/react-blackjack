import React from 'react';
import BustMessage from './BustMessage'

function Play({ handleHit, handTotal }) {
  return (
    <>
      <button
        onClick={handleHit}
      >
        Hit
      </button>
      <BustMessage
        total={handTotal}
      />
    </>
  )
}

export default Play