import React from 'react'
import Counter from './components/Counter'
function App() {
  const [count, setCount] = React.useState(0)
  const [totalTaps, setTotalTaps] = React.useState(0)
  const [show, setShow] = React.useState(false)
  function toggleCounter() {
    setShow(show => !show)
  }

  function handleIncrement() {
    setCount(prevCount => {
      return prevCount + 1
    })
    setTotalTaps(prevTotalTaps => {
      return prevTotalTaps + 1
    })
  }
  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
      setTotalTaps(prevTotalTaps => prevTotalTaps + 1)
    } else {
      setTotalTaps(prevTotalTaps => prevTotalTaps + 1)
    }

  }
  function handleReset() {
    setCount(0)
  }
  function handleResetAll() {
    setCount(0)
    setTotalTaps(0)
  }
  return (
    <div className=' app d-flex flex-column justify-content-start align-items-center text-center '>
      <h1 className='counterReact'>Counter with React Hooks</h1>
      <button className="hideCounter" onClick={toggleCounter}>Hide Counter</button>
      { !show && <h3>Click here </h3> }
      {
        show && (
          <Counter 
        
            countProp={count}
            totalTapsProp={totalTaps}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onReset={handleReset}
            onResetAll={handleResetAll}
          /> 
        )
      }
    </div>
  )
}
export default App;
