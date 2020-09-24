import React from 'react'
import {
    useParams
} from "react-router-dom";



function Notfound404() {
    let { url } = useParams();

    return (
        <div>
            <h1>Hey Admin, This Url Not Found : {url}</h1>
        </div>
    )
}
export default Notfound404;