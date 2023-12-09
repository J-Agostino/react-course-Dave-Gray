import React from 'react'

function Content() {
    const name = "Stalker"
    const handleNameChange = () => {
        const names = ['Juan', 'Dave', 'Paul']
        const int = Math.floor(Math.random() * 3)
        return names [int]
    }
  return (
    <main>
        <p>
          Hello random {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content