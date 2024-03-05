import React from "react";

function Box({ color, width, height, deleteBox }) {
    return (
        <>
            <div style={{backgroundColor: color, width: `${width}px`, height: `${height}px`}} data-testid="box"></div>
            <button onClick={ deleteBox }>X</button>
        </>
    )
};

export default Box;