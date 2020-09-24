
import Menucomp from '../components/menu'
import Headcomp from '../components/head'
import ContactNoti from '../components/contactNoti'
import validator from 'validator';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function contact() {

  const [emailCheck, emailCheckSet] = useState(undefined)
  function emailFunc(event) {
    emailCheckSet(validator.isEmail(event.target.value))
  }

  const [data, setData] = useState([])
  function oneFunc(event) {
    let payload = [];
    let userName = document.getElementById('fname').value
    let userEmail = document.getElementById('lname').value
    let userContent = document.getElementById('subject-contact').value
    if (userName && userEmail && userContent) {
      let userData = {
        _id: Math.floor(Math.random() * 20) + 10,
        name: userName,
        email: userEmail,
        contactData: userContent,
        date: new Date(),
        didYouRead: false
      };
      if (data.length > 0) {
        payload.push(...data)
      }
      payload.push(userData);
      setData(payload)

      const options = {
        url: 'http://192.168.254.2:8558/contact-set-content/',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: userData
      };

      axios(options).then((response) => { console.log(response.data.getData) });

      document.getElementById('fname').value = ''
      document.getElementById('lname').value = ''
      document.getElementById('subject-contact').value = ''
      emailCheckSet(undefined)


      setNoti(true)
    } else {
      alert('Alanlari Doldurun !')
    }
  }

  const [noti, setNoti] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setNoti(false)
    }, 2000)

  }, [noti])

  function locFunc(loc) {
    if (loc == 'Youtube') {
      location.href = 'https://www.youtube.com/channel/UC6xxuRhTSL5tJlhhjne7PsQ'
    }
    if (loc == 'Medium') {
      location.href = 'https://medium.com/@aytacabay.tr'
    }
  }

  return (
    <div className='contact-container'>
      <Headcomp />
      <Menucomp />

      {(noti) ? <ContactNoti /> : ''}

      <div className="contact-form-container">
        <form action="" method="" id='contact'>
          <label htmlFor="fname">Adiniz</label>
          <input type="text" id="fname" name="firstname" placeholder="Adiniz.." required />

          <label htmlFor="lname">Emailiniz</label>
          <input id="lname" style={emailCheck ? { borderBottom: ".3em solid lime" } : (emailCheck == undefined) ? {} : { borderBottom: '.3em solid red' }} onChange={emailFunc} defaultValue='' type="email" name="lastname" placeholder="Mailiniz" required />

          <label htmlFor="subject">Mesajiniz</label>
          <textarea id="subject-contact" name="subject" placeholder="Mesajiniz..." required></textarea>

          <button onClick={oneFunc} id='contact-submit' form='contact' type="button">Gonder</button>
        </form>
        <div className='socialMedia'>
          <button onClick={() => { locFunc('Youtube') }}>Youtube</button>
          <button onClick={() => { locFunc('Medium') }}>Medium</button>
        </div>

      </div>

      <style jsx>{`
            #fname, #lname, #subject-contact {
              width: 100%;
              padding: 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-sizing: border-box;
              margin-top: 6px;
              margin-bottom: 16px;
              resize: vertical;
            }

            #subject-contact {
              height: 150px;
              resize: none;
            }

            #contact-submit {
              background-color: #ff8400;
              color: white;
              padding: 12px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition:.3s all linear
            }

            #contact-submit:hover {
              background-color: #e17400;
              transform:translateX(5px) scale(1.1)
            }

            /* -------------------------------------------------------------------------- */
            /*                                  Containers                                */
            /* -------------------------------------------------------------------------- */
            .contact-container {
              background-image:url('contact.svg');
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              height:100vh;
              z-index:1;
              font-family: sans-serif;
            }
            .contact-form-container {
              border - radius: 5px;
              padding: 1em;
              display: flex;
              flex-direction:column;
              justify-content: center;
              align-items:center;
              overflow: hidden;
              height: calc(100vh - 2em);
            }
            .socialMedia {
              position:absolute;
              left:0;
              top:10px;
              display:flex;
              flex-direction:column;
            }
            .socialMedia > button {
              width:auto;
              cursor:pointer;
              color: white;
              border: none;
              padding:1em;
              margin-bottom:1em;
              font-size:1rem;
              animation-name:soc;
              animation-duration: 1s;
              animation-iteration-count: infinite;
              animation-direction: alternate;
              animation-timing-function: linear;
              box-shadow:inset 0 0 .1em .1em #555,0 0 .3em .1em #555;
              border-radius:0 .2em .2em 0;
            }
            .socialMedia > button:hover {
              animation:none;
            }
            .socialMedia > button:nth-child(1) {
              background-color:rgb(255, 66, 32);
              animation-delay:.5s;
            }
            .socialMedia > button:nth-child(2) {
              background-color:rgb(64, 64, 64);
            }   
            @keyframes soc{
              from{
                transform:scale(1)
              }
              to{
                transform:scale(1.1);
                box-shadow:inset 0 0 .3em .1em #555,0 .2em .3em .1em #555;
              }
            }         
        @media (max-width: 1200px) {
          .contact-container {
              background-size: cover;
        }

      `}</style>
    </div >
  )
}
