import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'


function Todolist() {
    let date = new Date();
    const contentdataRef = useRef()
    const [check, setCheck] = useState(0)

    function getTodolist() {
        axios.get('http://192.168.254.2:9000/admin-get-todolist/')
            .then(function (response) {
                setTodolist(response.data.getData.getData)
            })
    }

    useEffect(() => {
        getTodolist()

        setCheck(0)
    }, [check])

    const [todolist, setTodolist] = useState([])
    function saveTodolist() {
        let subPayload;
        let payload = [];
        payload.push(...todolist);
        subPayload = { _id: (Math.round((Math.random() * 200) + 1)), todolist: contentdataRef.current.value, isdone: false, date: date }
        payload.push(subPayload)
        setTodolist(payload);
        let data = {
            rule: {
                name: 'add'
            },
            data: subPayload,
            pass: '5@#1ˆ2*{&!c'
        }
        sendTodolist(data)
    }

    async function sendTodolist(data) {
        const options = {
            url: 'http://192.168.254.2:9000/admin-set-todolist/',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: data
        };
        await axios(options).then((response) => {
            alert((response.data.getData) ? "Islem Basarili" : "Islem Gerceklesmedi..")
        });
        setCheck(1)
    }




    async function changeCommentRules(data) {
        const options = {
            url: 'http://192.168.254.2:9000/admin-set-todolist/',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: data
        };
        await axios(options).then((response) => {
            alert((response.data.getData) ? "Islem Basarili" : "Islem Gerceklesmedi..")
        });
        setCheck(1)
    }

    function deleteFunc(param) {
        let data = {
            rule: {
                name: "delete",
            },
            parentNodeId: param,
            pass: '5@#1ˆ2*{&!c'
        }
        changeCommentRules(data)
    }

    function doneFunc(param) {
        let data = {
            rule: {
                name: "isdone",
                rule: true
            },
            parentNodeId: param,
            pass: '5@#1ˆ2*{&!c'
        }
        changeCommentRules(data)
    }

    return (
        <>
            <div className="contentlist">
                <h3 style={{ borderBottom: ".3em solid #444", marginBottom: "1em", paddingBottom: ".3em" }}>TodoList List</h3>
                <ul>
                    {
                        (todolist.length > 0) ?
                            todolist.map(item => {
                                return <li key={item._id} className="comment-box-container">
                                    <span style={{ borderBottom: ".3em solid #444", paddingBottom: ".3em" }}><b>Todo : </b>{item.todolist}</span>
                                    <div className="todolistButton">
                                        <button onClick={() => { deleteFunc(item._id) }}>Delete</button>
                                        <button onClick={() => { doneFunc(item._id) }}>Done</button>
                                    </div>
                                </li>

                            })
                            :
                            ''
                    }
                </ul>


            </div>
            <div className="contentdata">
                <h3 style={{ borderBottom: ".3em solid #444", marginBottom: "1em", paddingBottom: ".3em" }}>TodoList Add</h3>
                <textarea style={{ height: "100px" }} ref={contentdataRef} id="contentdata" name="contentdata" placeholder="Write something.."></textarea>
                <button className='button' onClick={saveTodolist} type="button">Save</button>
            </div>
        </>
    )
}
export default Todolist;