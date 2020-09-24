import React from 'react'

function AlertErrorbox(props) {
    return (
        <>
            <div className="alertCommentBox" style={{ boxShadow: "0 0 0.2em 0.1em rgb(40, 208, 88)" }}>
                <span>Veri Yukleniyor Bekleyin!</span>
            </div>
        </>
    )
}
export default AlertErrorbox;