import { useCallback } from "react";

function Commentsubbox(props) {


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
      <div className="blog-tag-id-comment-boxs">
        <div className="blog-tag-id-comment-header">
          <h2>{props.data.name.toUpperCase()}</h2>
          <div className="comment-data-email-box">
            <div className="comment-date">
              <b>Tarih : </b> {dateFunc(props.data.date).day + " " + days[dateFunc(props.data.date).month] + " " + dateFunc(props.data.date).year}
            </div>
            <div className="comment-email">
              <b>Email : </b>{props.data.email}
            </div>
          </div>
        </div>

        <div className="blog-tag-id-comment-content">
          <p>
            {props.data.commentContent}
          </p>
        </div>
      </div>
      <style jsx>{`
            * {
                    font-family: sans-serif;
                }
      `}</style>
      <style jsx>{`
        .blog-tag-id-comment-boxs {
          margin-bottom: 2em;
          padding: 1em;
          background-color: #444;
          color:#dddddd;
          box-shadow: 0 0 0.5em #333;
          border-radius: 0.5em;
        }

        .blog-tag-id-comment-header {
          display: flex;
          flex-direction: column;
        }

        .blog-tag-id-comment-header > .comment-data-email-box {
          display: flex;
          flex-wrap:wrap;
          font-size:.8rem;
          border-bottom: 3px solid #a7a7a7;
        }

        .blog-tag-id-comment-header > .comment-data-email-box > .comment-date {
          margin-bottom: 0.3em;
          margin-right: 0.5em;
        }
        .blog-tag-id-comment-header > .comment-data-email-box > .comment-email {
            margin-bottom:1em
        }

        .blog-tag-id-comment-boxs > .blog-tag-id-comment-header {
          margin-bottom: 1em;
        }

        .blog-tag-id-comment-boxs > .blog-tag-id-comment-header > h2 {
          font-size:1.3rem;
          margin-bottom: 0.3em;
          color:#dddddd;
        }
        .blog-tag-id-comment-content > p {
            font-size:1rem;
        /* } */
        @media (max-width: 1200px) {
            
        }
      `}</style>
    </>
  );
}


export default Commentsubbox;