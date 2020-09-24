import React from 'react'
import ReactJson from 'react-json-view'

function Errorbox(props) {
    return (
        <>
            <div style={{ padding: "1em 0 ", borderBottom: ".3em solid #444" }}>
                <ReactJson src={props} theme="monokai" />
            </div>
        </>
    )
}

export default Errorbox;
