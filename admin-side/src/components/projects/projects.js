import React, { useState, useEffect, useRef } from 'react'
import Projectstbox from './projectsbox'

import axios from 'axios'


export default function Contact() {
    const projectNameRef = useRef()
    const projectInfoRef = useRef()
    const projectAddressRef = useRef()


    const [check, setCheck] = useState(0)


    const [lastData, setLastData] = useState([]);
    async function getLastProjects() {
        await axios.get('http://192.168.254.2:9000/admin-get-projects/')
            .then(function (response) {
                setLastData(response.data.getData.getData)
            })
    }

    useEffect(() => {
        getLastProjects()
        setCheck(0)
    }, [check])



    async function setProject(data) {
        let projectname = projectNameRef.current.value;
        let projectinfo = projectInfoRef.current.value;
        let projectaddress = projectAddressRef.current.value;

        const options = {
            url: 'http://192.168.254.2:9000/admin-set-projects/',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                _id: (Math.random() * 20) + 200,
                projectname,
                projectinfo,
                projectaddress,
                pass: '5@#1ˆ2*{&!c'
            }
        };
        await axios(options).then((response) => {
            alert(response.data.getData)
        });
        setCheck(1)
    }

    return (
        <>
            {
                (lastData.length > 0) ?
                    lastData.map(item => {
                        return <Projectstbox key={item._id} data={item} />
                    })
                    :
                    ''
            }
            <div className="project-add">
                <form action="">
                    <label htmlFor="projectNameRef">Add Project Name</label>
                    <input ref={projectNameRef} type="text" id="projectName" name="project" placeholder="Project add.." />
                    <label htmlFor="projectInfoRef">Add Project Info</label>
                    <input ref={projectInfoRef} type="text" id="projectInfo" name="project" placeholder="Project add.." />
                    <label htmlFor="projectAddressRef">Add Project Address</label>
                    <input ref={projectAddressRef} type="text" id="projectAddress" name="project" placeholder="Project add.." />
                </form>
                <button className='button' type='button' onClick={setProject} >Send</button>
            </div>
        </>
    )
}
