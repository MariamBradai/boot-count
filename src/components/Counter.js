import React from 'react'

export default function Counter(props) {
  return (
    <div>
      <h2>let's begin</h2>
        <div className="counter">
            <h1 className='colorCounter'> Counter </h1>
            <h1 className="count"> {props.countProp} </h1>
            <h1 className="taps"> Total taps :{props.totalTapsProp}</h1>
            <div >
                <button onClick={props.onIncrement}>Increment + </button>
                <button onClick={props.onDecrement}>Decrement - </button>
            </div>
            <div >
                <button className="reset-count" onClick={props.onReset}>Reset</button>
                <button className="reset-all" onClick={props.onResetAll}>Reset All</button>
            </div>   
        </div>
    </div>
  )
}
