import React, { useState, useEffect } from 'react'
import Contacttbox from './contacttbox'
import AlertContactbox from './alertcontactbox'

import axios from 'axios'


export default function Contact() {
    const [check, setCheck] = useState(0)


    const [lastData, setLastData] = useState([]);
    async function getLastComment() {
        await axios.get('http://192.168.254.2:9000/contact-get-content')
            .then(function (response) {
                setLastData(response.data.getData)
            })
    }

    useEffect(() => {
        getLastComment()
        setCheck(0)
    }, [check])

    async function changeCommentRules(data) {
        const options = {
            url: 'http://192.168.254.2:9000/admin-contact-set-rule-change/',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: data
        };
        await axios(options).then((response) => { alert('Contact Basarili bir sekilde degistirildi') });
        setCheck(1)
    }

    function readedFunc(parentId) {
        let data = {
            parentNodeId: String(parentId),
            rule: {
                name: 'readed',
                rule: true
            },
            pass: '5@#1ˆ2*{&!c'
        }
        changeCommentRules(data)
    }

    return (
        <>
            {
                (lastData.length > 0) ?
                    lastData.map(item => {
                        return <Contacttbox key={item._id} data={item} readedFunc={readedFunc} />
                    })
                    :
                    <AlertContactbox />
            }
        </>
    )
}
