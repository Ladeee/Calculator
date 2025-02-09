import './operators.css'

export default function Operators({ handleClick }) {
  const operatorList = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '='],
    bodmas: ['C', 'DEL', '/', '*', '-', '+'],
  }

  return (
    <div className="operators-wrapper">
      <div className="operator-lists">
        <div className="num-list">
          {operatorList.numbers.map((number) => (
            <p
              key={number}
              className="number"
              onClick={() => handleClick(number)}
            >
              {number}
            </p>
          ))}
        </div>
        <div className="operate">
          {operatorList.bodmas.map((bodmas) => (
            <p
              key={bodmas}
              className="number"
              onClick={() => handleClick(bodmas)}
            >
              {bodmas}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
