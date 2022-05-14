import thankYou from '../illustration-thank-you.svg'

function Submitted({ rating }) {
  return (
    <div className='submitted'>
      <img src={thankYou} alt='thank-you' />
      <p className='submitted-msg'>You selected {rating} out of 5</p>
      <h3>Thank you!</h3>
      <p className='submitted-text'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  )
}

export default Submitted
