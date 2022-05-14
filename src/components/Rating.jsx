import React from 'react'
import star from '../star.svg'

function Rating({ submit, setRating, rating }) {
  return (
    <div className='rating'>
      <div className='blur'>
        <img src={star} alt='' />
      </div>
      <h3>How did we do?</h3>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='rating-input'>
        {[...Array(5)].map((r, index) => {
          index += 1
          return (
            <span
              className={[rating === index ? 'span blur active' : 'span blur']}
              value={index}
              onClick={() => setRating(index)}
              key={index}
            >
              {index}
            </span>
          )
        })}
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Rating
