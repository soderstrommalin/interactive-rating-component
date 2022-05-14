import './App.css'
import { useState } from 'react'
import Rating from './components/Rating'
import Submitted from './components/Submitted'

function App() {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const submit = () => {
    setSubmitted(true)
    console.log(rating)
  }

  return (
    <div className='App'>
      <div className='rating-wrapper'>
        {!submitted ? (
          <Rating rating={rating} setRating={setRating} submit={submit} />
        ) : (
          <Submitted rating={rating} />
        )}
      </div>
      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://github.com/soderstrommalin' >
          Malin
        </a>
        .
      </div>
    </div>
  )
}

export default App
