import './input.css'

export default function Input({inputValue}) {
  return (
    <div className='input-wrapper'>
      <input type="text" value={inputValue} readOnly placeholder='5*5+5' />
    </div>
  )
}
