import Link from "next/link";
import { useCallback } from "react";

export default function Blogboxs(props) {

  let days = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  let dateFunc = useCallback((param) => {
    let date = new Date(param)
    let payload = {
      day: date.getDay(),
      month: date.getMonth(),
      year: date.getFullYear()
    }
    return payload;
  })

  return (
    <>

      <div className="blog-page-main-content-boxs">
        <h2>{props.databox.header}</h2>
        <div className="blog-page-content-time-box">
          <span>
            <b>Tarih : </b> {dateFunc(props.databox.date).day + " " + days[dateFunc(props.databox.date).month] + " " + dateFunc(props.databox.date).year} </span>
          <span>
            <b>Okuma Suresi : </b> {props.databox.readtime}  </span>
        </div>
        <div className="blog-page-content-box">
          {props.databox.info}
        </div>
        <div className="blog-page-content-button-box">
          <Link href={`/blog/${props.databox.tag}/${props.databox.seoheader}`}>
            <button>Devam et...</button>
          </Link>
        </div>
      </div>

      <style jsx>{`

        .blog-page-main-content-boxs {
          width: 30%;
          margin: 2em 0;
          background-color: transparent;
          box-shadow: 0 0.2em 0.5em black;
          border-radius: 0.3em;
          align-self: start;
          border-radius: 0.3em;
          overflow: hidden;
        }
        .blog-page-main-content-boxs > h2 {
          color: rgb(71, 65, 64);
          margin: 1.5em;
          margin-bottom: 1em;
        }
        .blog-page-content-time-box {
          display: flex;
          justify-content: flex-start;
        }
        .blog-page-content-time-box > span {
          color: #7e7d7d;
          margin-left: 2.3em;
          margin-bottom: 1em;
        }
        .blog-page-content-time-box > span:nth-child(2) {
          margin-left: 2em;
        }

        .blog-page-content-box {
          color: #36363c;
          font-size: 1.1em;
          padding: 1em 2em 2em 2em;
        }
        .blog-page-content-button-box {
          background: #ff8400;
          text-align: center;
        }
        .blog-page-content-button-box > button {
          transition: ease-in-out 0.3s all;
          background: #ff8400;
          width: 100%;
          height: 50px;
          cursor: pointer;
          border-top: 3px solid #555;
          color: whitesmoke;
          font-size: 1em;
          font-weight: bold;
        }

        .blog-page-content-button-box:hover > button {
          background-color: #f49229;
        }

        @media (max-width: 1200px) {
          .blog-languages-box {
            justify-content: center;
          }
          .blog-page-main-content-boxs {
            width: 90%;
            margin: 1.5em 0;
          }
        }
      `}</style>


    </>
  )
}
