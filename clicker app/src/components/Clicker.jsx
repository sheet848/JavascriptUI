import React, { useState } from 'react'

const Clicker = () => {
    
    const [clickerValue, updateClickerValue] = useState(0);

    return (
    <>
        <div className="container">

            <div className="clickerParent border border-secondary rounded mt-4">
                <div className="clickerDisplay d-flex align-items-center justify-content-center bg-light display-2">{clickerValue}</div>
            </div>

            <div className="clickerButtonContainer d-flex flex-row">

                <button className="btn btn-success w-100"
                onClick={() => updateClickerValue(clickerValue + 1)}>
                    <i className='fa fa-2x fa-plus'></i>
                </button>

                <button className="btn btn-warning w-100"
                onClick={() => updateClickerValue(0)}>
                    <i className='fa fa-2x fa-refresh'></i>
                </button>

                <button className="btn btn-danger w-100"
                onClick={() => updateClickerValue(Math.max(0,clickerValue - 1))}>
                    <i className='fa fa-2x fa-minus'></i>
                </button>
            </div>
        </div>
    </>
  )
}

export default Clicker