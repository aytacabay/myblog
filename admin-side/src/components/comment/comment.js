import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Commentbox from './commentbox'
import AlertCommentbox from './alertcommentbox'



function Comment() {

    const [check, setCheck] = useState(0)

    async function changeCommentRules(data) {
        const options = {
            url: 'http://192.168.254.2:9000/admin-comment-set-rule-change',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: data
        };
        await axios(options).then((response) => { alert('Comment Basarili bir sekilde degistirildi') });
        setCheck(1)
    }

    const [lastData, setLastData] = useState([]);
    async function getLastComment() {
        await axios.get('http://192.168.254.2:9000/admin-comment-get-all')
            .then(function (response) {
                setLastData(response.data.getData)
            })
    }

    function ignoreFunc(parentId, childId) {
        let data = {
            parentNodeId: String(parentId),
            childNodeId: String(childId),
            rule: {
                name: 'ignore',
                rule: true
            },
            pass: '5@#1ˆ2*{&!c'
        }
        changeCommentRules(data)
    }
    function readedFunc(parentId, childId) {
        let data = {
            parentNodeId: String(parentId),
            childNodeId: String(childId),
            rule: {
                name: 'readed',
                rule: true
            },
            pass: '5@#1ˆ2*{&!c'
        }
        changeCommentRules(data)
    }

    useEffect(() => {
        getLastComment()
        setCheck(0)
    }, [check])

    return (
        <>
            {
                (lastData.length > 0) ? lastData.map(item => {
                    return <Commentbox key={item.comment._id} parentNodeId={item._id} childNodeId={item.comment._id} data={item} ignoreFunc={ignoreFunc} readedFunc={readedFunc} />
                })
                    :
                    <AlertCommentbox />

            }

        </>
    );
}
export default Comment;