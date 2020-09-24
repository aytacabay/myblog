import axios from 'axios'
import Commentsubbox from "./commentsubbox";
import validator from "validator";
import { useState } from "react";

export default function Commentbox(props) {

  // Mail value check
  const [emailCheck, emailCheckSet] = useState(undefined);
  function emailFunc(event) {
    emailCheckSet(validator.isEmail(event.target.value));
  }

  const [data, setData] = useState([])
  function oneFunc(event) {
    let payload = [];
    let userName = document.getElementById('name').value
    let userEmail = document.getElementById('email').value
    let userComment = document.getElementById('comment').value
    let userData = {
      _id: Math.floor(Math.random() * 20) + 10,
      name: userName,
      email: userEmail,
      commentContent: userComment,
      date: new Date(),
      ignore: false,
      parentNodeId: props.data.fetchData.seoheader,
      didYouRead: false
    };
    if (data.length > 0) {
      payload.push(...data)
    }
    payload.push(userData);
    setData(payload)

    const options = {
      url: 'http://192.168.254.2:8558/comment-set-content/',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: userData
    };

    axios(options);

    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('comment').value = ''
  }

  return (
    <>
      <div className="blog-tag-id-content-footer-box">
        <div className="blog-tag-id-footer-header">
          <h1>Yorumlar</h1>
          <span></span>
        </div>

        <div className="blog-tag-id-footer-comment-main">
          {
            props.data.fetchData.comment
              ? props.data.fetchData.comment.map((item) => {
                return item !== null ? <Commentsubbox key={item._id} data={item} /> : ''
              })
              : ""
          }
          {
            data
              ? data.map((item) => {
                return <Commentsubbox key={item._id} data={item} />;
              })
              : ""
          }
        </div>

        <div className="blog-tag-id-footer-comment-add">
          <div className="blog-tag-id-footer-comment-add-header">
            <form action="" id="commentForm" method="">
              <h2>
                <label htmlFor="name">Yorumunuz</label>
              </h2>

              <input id="name" type="text" name="usrname" required placeholder="Isminiz" />

              <input id="email" style={emailCheck ? { borderBottom: ".6em solid lime" } : emailCheck == undefined ? {} : { borderBottom: ".3em solid red" }} onChange={emailFunc} defaultValue="" type="email" name="email" placeholder="Mailiniz" required />

              <textarea id="comment" rows="4" cols="50" name="comment" form="commentForm" required placeholder="Messajiniz..." ></textarea>

              <div className="button-cont">
                <button onClick={oneFunc} id="comment-button" type="button">
                  <span>Gonder</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
            * {
                    font-family: sans-serif;
                }
      `}</style>
      <style jsx>{`
        .blog-tag-id-content-footer-box {
          width: calc(100% - 4em);
          margin-bottom: 3em;
          padding: 2em;
          background-color: rgba(0, 0, 0, 0.55);
          border-radius: 0.3em;
          box-shadow: 0 0 0.4em #444, inset 0 0 0.4em #444;
        }

        .blog-tag-id-footer-header {
          margin-bottom: 2em;
        }

        .blog-tag-id-content-footer-box > .blog-tag-id-footer-header > h1 {
          color: whitesmoke;
          margin-bottom: 0.5em;
        }

        .blog-tag-id-content-footer-box > .blog-tag-id-footer-header > span {
          display: block;
          border-bottom: 0.3em solid rgba(245, 245, 245, 0.598);
        }

        .blog-tag-id-footer-comment-main {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .blog-tag-id-footer-comment-add {
          margin-bottom: 2em;
          padding: 2em 1em 1em 1em;
          /* border-top: 0.3em solid rgba(245, 245, 245, 0.598); */
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .blog-tag-id-footer-comment-add-header > form > h2 {
          margin-bottom: 0.5em;
          color: whitesmoke;
        }

        .blog-tag-id-footer-comment-add-header > form > #name,
        .blog-tag-id-footer-comment-add-header > form > #email {
          width: calc(50% - 2em);
          height: 30px;
          display: block;
          padding: 1em;
          margin: 0.5em 0 2em 0;
          border-radius: 0.3em;
          box-shadow: 0 0 0.2em #444;
        }
        .blog-tag-id-footer-comment-add-header > form > #comment {
          width: calc(100% - 2em);
          height: 150px;
          display: block;
          resize: none;
          padding: 1em;
          margin: 0.5em 0 2em 0;
          border-radius: 0.3em;
          box-shadow: 0 0 0.2em #444;
        }
        .button-cont {
          width: 100%;
        }
        .blog-tag-id-footer-comment-add-header > form #comment-button {
          width: 100%;
          height: 50px;
          background-color: rgba(72, 255, 36, 0.646);
          color: whitesmoke;
          font-weight: bold;
          font-size: 1em;
          border-radius: 0.3em;
          box-shadow: 0 0 0.2em #444;
          cursor: pointer;
          transition: 0.5s all ease-in-out;
        }

        .blog-tag-id-footer-comment-add-header > form #comment-button:hover {
          background-color: rgba(72, 255, 36, 0.441);
        }

        @media (max-width: 1200px) {
          .blog-tag-id-content-footer-box {
            margin-bottom: 0;
          }
          .blog-tag-id-footer-comment-add {
            padding: 2em 0 0 0;
          }
          .blog-tag-id-footer-comment-add-header > form > #name,
          .blog-tag-id-footer-comment-add-header > form > #email {
            width: calc(100% - 2em);
          }
          .blog-tag-id-footer-comment-add-header > form > #comment {
            width: calc(100% - 2em);
          }
          .blog-tag-id-footer-comment-add-header > form #comment-button {
            display: inline-block;
          }
        }
      `}</style>
    </>
  );
}