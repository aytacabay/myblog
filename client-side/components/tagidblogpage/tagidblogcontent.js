import { useEffect, useState, useCallback } from "react";

function Tagidblogcontent(props) {
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setData(props.data.fetchData);
    var innerArr = [];
    props.data.fetchData.content.forEach((item) => {
      innerArr += item;
    });
    setArr(innerArr);
  }, []);

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

  function createMarkup() {
    return {
      __html: arr,
    };
  }

  return (
    <div>
      <div className="blog-tag-id-content-header-box">
        <h1>{data.header}</h1>
        <div className="header-data-read-tag">
          <span>
            <b>Tarih : </b> {dateFunc(data.date).day + " " + days[dateFunc(data.date).month] + " " + dateFunc(data.date).year}
          </span>
          <span>
            <b>Okuma Suresi: </b>
            {data.readtime}
          </span>
          <span>
            <b>Etiketi : </b>
            {data.tag}
          </span>
        </div>
      </div>
      <div
        className="blog-tag-id-content-main-box"
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
      <style jsx>{`
            * {
                    font-family: sans-serif;
                }
      `}</style>
      <style jsx global>{`
        .blog-tag-id-content-header-box {
          margin: 0 0 3em;
          padding: 2em;
          background-color: #f49229;
          border-radius: 0.3em;
          box-shadow: 0 0 0.4em #444, inset 0 0 0.4em #444;
        }

        .header-data-read-tag {
          display: flex;
          flex-wrap: wrap;
        }

        .blog-tag-id-content-header-box > h1 {
          color: whitesmoke;
          margin-bottom: 1em;
        }
        .blog-tag-id-content-header-box > .header-data-read-tag > span {
          margin-right: 1em;
          font-size: 1rem;
        }
        .blog-tag-id-content-header-box > span > b {
          color: #444;
        }

        .blog-tag-id-content-main-box {
          margin-bottom: 3em;
          border-radius: 0.3em;
        }

        .blog-tag-id-content-main-box > p {
          margin: 1em 0 2em 0;
          letter-spacing: 1px;
          word-spacing: 1px;
          line-height: 1.2em;
        }

        .blog-tag-id-content-main-box > p:nth-child(1) {
          text-indent: 2em;
        }

        .blog-tag-id-content-main-box > p:nth-child(1)::first-letter {
          font-size: 2.5em;
          padding: 1em 0.1em 0 0;
        }
        
        .blog-tag-id-content-main-box div {
          width:100%;
          margin: 1em 0;
          padding: 1em 0;
          display:flex;
          flex-direction:column;
          align-items:center;
          border-top: 0.3em solid rgba(77, 77, 77, 0.598);
          border-bottom: 0.3em solid rgba(77, 77, 77, 0.598);
        }

        .blog-tag-id-content-main-box img {
          margin:1em 0;
          max-width: calc(100% - 2em);
        }

        .blog-tag-id-content-main-box pre {
          font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
          white-space: pre-wrap;
          white-space: -moz-pre-wrap;
          white-space: -o-pre-wrap;
          word-wrap: break-word;
          border-radius: .3em;
          margin-bottom:3em;
          background: #5c5c5c;
          box-shadow:0 0.6em 0.3em 0.1em #888,inset 0 0 1em .3em #333  ;
          color: #fff4f4;
          page-break-inside: avoid;
          font-size: 15px;
          color:#00cb63;
          line-height: 1.6;
          max-width: 100%;
          overflow: auto;
          padding: 1.5em;
          display: block;
          box-sizing:border-box;
        }

        @media (max-width: 550px) {
          .header-data-read-tag {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
          }
          .blog-tag-id-content-header-box > .header-data-read-tag > span {
            margin-bottom: 0.3em;
          }
        }

        @media (max-width: 1200px) {
          .blog-tag-id-content-header-box {
            margin: 0 0 3em;
            padding: 2em;
          }
          .blog-tag-id-content-header-box > h1 {
            margin-bottom: 0.5em;
          }
          .blog-tag-id-content-main-box > p {
            margin: 2.5em 0;
          }
          .blog-tag-id-content-main-box {
            margin-bottom: 3em;
            padding: 0em;
          }
        }
      `}</style>
    </div>
  );
}
export default Tagidblogcontent;
