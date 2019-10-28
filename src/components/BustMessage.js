import React from 'react';

function BustMessage({ total }) {
  if (total > 21) {
    return (
      <p>Bust</p>
    )
  } else {
    return (
      <p>Not bust</p>
    )
  }
}

export default BustMessage