import React from 'react'

function Commentbox(props) {
    return (
        <>
            <div className="comment-box-container">
                <span><b>Name : </b>{props.data.comment.name}</span>
                <span><b>email : </b>{props.data.comment.email}</span>
                <span><b>Comment : </b>{props.data.comment.commentContent}</span>
                <span><b>Date : </b>{props.data.comment.date}</span>
                <span><b>Ignore : </b>{props.data.comment.ignore}</span>
                <span><b>ParentNode : </b>{props.data.comment.parentNodeId}</span>
                <div className="comment-box-buttons">
                    <button type='button' onClick={() => { props.ignoreFunc(props.parentNodeId, props.childNodeId) }}>Ignore</button>
                    <button type='button' onClick={() => { props.readedFunc(props.parentNodeId, props.childNodeId) }}>Okundu</button>
                </div>
            </div>

        </>
    )
}
export default Commentbox;