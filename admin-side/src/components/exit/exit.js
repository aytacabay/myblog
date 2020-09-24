import React from 'react'
import axios from 'axios';

export default function Exit() {


    async function exitFunc() {
        const options = {
            url: 'http://192.168.254.2:9000/exit',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify({
                exit: true
            })
        };

        await axios(options).then((response) => { alert(`Cikis ${response.data.exit} Basarili`) });
        window.location.reload()
    }


    return <>
        <h3 style={{ marginBottom: '1.5em' }}>Güvenli bir şekilde çıkış yapmak için aşağıdaki butona tıkla !</h3>
        <button type='button' className='button' onClick={exitFunc}>Exit</button>
    </>;
}
