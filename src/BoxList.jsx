import React, { useState } from "react";
import Box from "./Box.jsx";
import NewBoxForm from "./NewBoxForm.jsx";
import { v4 as uuid } from 'uuid';

function BoxList() {
    const [ boxList, setBoxList ] = useState([ {key: 0, color: "blue", width: 100, height: 100} ]);

    const addBox = ({ color, width, height }) => {
        let  newBox = { key: uuid(), color: color, width: width, height: height };
        setBoxList(boxes => [...boxes, newBox]);
    };

    return (
        <div>
            <h2>BoxList!</h2>
            <NewBoxForm
                addBox={() => addBox()}/>
            {boxList.map((box) => (
                <Box
                    key={box.key}
                    color={box.color}
                    width={box.width}
                    height={box.height}
                    />
            ))}

        </div>
    )
};

export default BoxList;