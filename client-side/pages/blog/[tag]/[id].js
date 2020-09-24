import Headcomp from "../../../components/head";
import Menucomp from "../../../components/menu";
import Tagidblogcontent from "../../../components/tagidblogpage/tagidblogcontent";
import Commentbox from "../../../components/tagidblogpage/Commentbox";
import LoadingAnimation from "../../../components/tagidblogpage/loadingAnimation";

import fetch from "isomorphic-unfetch";

function content(props) {
  return (
    <div className="blog-tag-id-container">
      <Headcomp />
      <Menucomp />

      <div className="blog-tag-id-content-box">
        <LoadingAnimation />
        <Tagidblogcontent data={props} />
        <Commentbox data={props} />
      </div>

      <style jsx>{`
       /* -------------------------------------------------------------------------- */

        .blog-tag-id-container {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          background-color: transparent;
          font-family: sans-serif;
        }

        .blog-tag-id-content-box {
          width: 85%;
          display: flex;
          flex-direction: column;
          color: rgba(60, 60, 60, 0.845);
          padding: 2em;
          margin: 1em 0;
        }

        /* -------------------------------------------------------------------------- */
        /*                                 Responsive                                 */
        /* -------------------------------------------------------------------------- */

        @media (max-width: 550px) {
          .header - data - read - tag {
          display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
          }
          .blog-tag-id-content-header-box > .header-data-read-tag > span {
          margin - bottom: 0.3em;
          }
        }
        @media (max-width: 1200px) {
          .blog - tag - id - container {
          width: 100vw;
            min-height: 100vh;
          }
          .blog-tag-id-content-box {
          width: 95%;
            padding: 0;
            margin: 1em 0;
          }
        }
      `}</style>
    </div>
  );
}
export default content;

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://192.168.254.2:8558/blog-get-content-one/${context.query.tag}/${context.query.id}`
  );
  const json = await res.json();

  if (json.getData.getData === undefined) {
    if (context.res) {
      context.res.writeHead(301, {
        Location: `/404${context.req.url}`,
      });
      context.res.end();
      return { props: {} };
    } else {
      return { props: {} };
    }
  } else {
    return { props: { fetchData: json.getData.getData } };
  }
}
