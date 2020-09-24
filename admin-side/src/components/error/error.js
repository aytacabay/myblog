import React, { useState, useEffect } from 'react'
import Errorbox from './errorbox'
import axios from 'axios'
import AlertErrorbox from './alertErrorbox'



export default function Error() {

    const [lastData, setLastData] = useState([]);
    async function getLastComment() {
        await axios.get('http://192.168.254.2:9000/captured-errors/')
            .then(function (response) {
                setLastData(response.data.getData.getData)
            })
    }

    useEffect(() => {
        getLastComment();
    }, [])



    return (
        <>
            {
                (lastData.length > 0) ?
                    lastData.map(item => {
                        return <Errorbox key={item._id} data={item} />
                    })
                    :
                    <AlertErrorbox />
            }
        </>
    );
}

