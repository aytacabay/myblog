import React, { useRef } from 'react'
import axios from 'axios'


function UserAdminBox() {
    const name = useRef()
    const securecode = useRef()
    const pass = useRef()
    const againpassword = useRef()

    async function sendFunc() {

        if (pass.current.value === againpassword.current.value) {
            let postData = {
                name: name.current.value,
                code: Number(securecode.current.value),
                pass: pass.current.value,
                passKey: '5@#1ˆ2*{&!c'
            };
            const options = {
                url: 'http://192.168.254.2:9000/admin-userdata-set-rule-change/',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: postData
            };

            await axios(options).then((response) => { alert((response.data.getData) ? "Basarili sekilde degistirildi" : "Degisim Basarisiz..") });

            name.current.value = ''
            securecode.current.value = ''
            pass.current.value = ''
            againpassword.current.value = ''
        } else {
            alert('Password esit degil!')
        }

    }

    return (
        <>
            <div className="container">
                <h3 style={{ borderBottom: ".3em solid #444", marginBottom: "1em", paddingBottom: ".3em" }}>Password Change</h3>
                <form action="" method="">
                    <label htmlFor="name">Name</label>
                    <input ref={name} type="text" id="name" name="name" placeholder="Name.." />

                    <label htmlFor="securecode">Secure Code</label>
                    <input ref={securecode} type="text" id="securecode" name="securecode" placeholder="Secure Code.." />

                    <label htmlFor="pass">Password</label>
                    <input ref={pass} type="password" id="pass" name="email" placeholder="Password.." />

                    <label htmlFor="againpassword">Again Password</label>
                    <input ref={againpassword} type="password" id="againpassword" name="email" placeholder="Password.." />

                    <button className='button' type="button" onClick={sendFunc}>Change</button>
                </form>
            </div>
        </>
    )
}

export default UserAdminBox;