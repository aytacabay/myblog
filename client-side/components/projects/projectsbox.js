import React from "react";

export default function Projectsbox(props) {

  function urlFunc(url) {
    document.location.href = url
  }

  return (
    <>
      <div className="project-page-main-content-boxs">
        <img src="/break.svg" alt="project" />
        <h2>{props.data.projectname}</h2>
        <div className="project-page-content-box">{props.data.projectinfo}</div>
        <div className="project-page-content-button-box">
          <button onClick={() => { urlFunc(props.data.projectaddress) }}>Projeye Bak..</button>
        </div>
      </div>
      <style jsx>{`
        .project-page-main-content-boxs {
          width: 30%;
          margin: 2em 0;
          display:flex;
          flex-direction:column;
          background-color: transparent;
          box-shadow: 0 0.2em 0.5em black;
          border-radius: 0.3em;
          align-self: start;
          border-radius: 0.3em;
          overflow: hidden;
        }
        .project-page-main-content-boxs img{
            width:200px;
            margin-top:2em;
            align-self: center;
        }
        .project-page-main-content-boxs > h2 {
          color: rgb(71, 65, 64);
          margin: 1.5em;
          margin-bottom: 1em;
          border-top:.3em solid  #ccc;
            padding-top:0.5em;
        }
        .project-page-content-time-box {
          display: flex;
          justify-content: flex-start;
        }
        .project-page-content-time-box > span {
          color: #7e7d7d;
          margin-left: 2.3em;
          margin-bottom: 1em;
        }
        .project-page-content-time-box > span:nth-child(2) {
          margin-left: 2em;
        }

        .project-page-content-box {
          color: #36363c;
          font-size: 1.1em;
          padding: 1em 2em 2em 2em;
        }
        .project-page-content-button-box {
          background: #ff8400;
          text-align: center;
        }
        .project-page-content-button-box > button {
          transition: ease-in-out 0.3s all;
          background: #1a94f9;
          width: 100%;
          height: 50px;
          cursor: pointer;
          border-top: 3px solid #555;
          color: whitesmoke;
          font-size: 1em;
          font-weight: bold;
        }

        .project-page-content-button-box:hover > button {
          background-color: #4ea8f2;
        }

        @media (max-width: 1200px) {
          .project-languages-box {
            justify-content: center;
          }
          .project-page-main-content-boxs {
            width: 90%;
            margin: 1.5em 0;
          }
        }
      `}</style>
    </>
  );
}
