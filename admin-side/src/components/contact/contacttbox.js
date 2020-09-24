import React from 'react'

function Contacttbox(props) {
    return (
        <>
            <div className="comment-box-container">
                <span><b>Name : </b>{props.data.name}</span>
                <span><b>email : </b>{props.data.email}</span>
                <span><b>Content : </b>{props.data.contactData}</span>
                <span><b>Date : </b>{props.data.date}</span>
                <div className="comment-box-buttons">
                    <button type='button' onClick={() => { props.readedFunc(props.data._id) }}>Okundu</button>
                </div>
            </div>
        </>
    )
}
export default Contacttbox;