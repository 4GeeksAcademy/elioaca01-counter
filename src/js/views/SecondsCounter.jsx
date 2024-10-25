import React from "react";




const SecondsCounter = (props) => {
    const { numOne, numTwo, numThree, numFour, numFive, numSix } = props;
    return (
        <>
            <div className="container d-flex justify-content-center align-middle mt-5 pt-2 bg-dark text-white">
                <ul className="d-flex flex-row">
                    <li><img className="px-3" src="https://cdn-icons-png.flaticon.com/512/69/69935.png" alt="reloj" /></li>
                    <li className="px-3 fs-1">{numSix}</li>
                    <li className="px-3 fs-1">{numFive}</li>
                    <li className="px-3 fs-1">{numFour}</li>
                    <li className="px-3 fs-1">{numThree}</li>
                    <li className="px-3 fs-1">{numTwo}</li>
                    <li className="px-3 fs-1">{numOne}</li>
                </ul>

            </div>
        </>

    )
}

export default SecondsCounter;