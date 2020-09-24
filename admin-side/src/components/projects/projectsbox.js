import React from 'react'

function Contacttbox(props) {
    return (
        <>
            <div className="comment-box-container">
                <span><b>Name : </b>{props.data.projectname}</span>
                <span><b>Info : </b>{props.data.projectinfo}</span>
                <div>
                    <b>Address : </b>
                    <a href={props.data.projectaddress}>Projeye git</a>
                </div>
            </div>
        </>
    )
}
export default Contacttbox;