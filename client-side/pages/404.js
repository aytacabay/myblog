import Headcomp from "../components/head";
import Link from "next/link";
import axios from 'axios'

function Custom404() {

  if (typeof window !== 'undefined') {

    function error404() {

      const data = {
        url: {
          href: location.href,
          protocol: location.protocol,
          port: location.port,
          pathname: location.pathname
        },
        navigator: {
          appname: navigator.appName,
          appverison: navigator.appVersion,
          lang: navigator.languages,
          platform: navigator.platform,
          userAgent: navigator.userAgent,
          vendor: navigator.vendor
        },
        history: {
          ...history
        },
        screen: {
          ...screen
        },
        date: Date()
      }

      const options = {
        url: 'http://192.168.254.2:8558/captured-errors',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: { data }
      };

      axios(options).then(response => {
        console.log('Hataniz Kaydedildi ' + response.status);
      });

    }

    error404()

  }

  return (
    <div>
      <Headcomp />
      <div className="error-container">
        <img src="/404.svg" alt="404" />
        <Link href="/">
          <button>Home</button>
        </Link>
        <style jsx>{`
          .error-container {
            width: 100vw;
            height: 100vh;
            background-color: rgba(210, 211, 211, 0.413);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .error-container > img {
            margin-top: 3em;
            width: 50vw;
            height: 90vh;
          }

          .error-container > button {
            background-color: #f9433f;
            color: whitesmoke;
            font-weight: bold;
            font-size:1em;
            cursor:pointer;
            margin-top: 1em;
            width: 100%;
            height: 10vh;
            transition:  all.5s linear;
          }
          .error-container > button:hover {
            background-color: #3ff94f;
            color:#444;
          }
        `}</style>
      </div>
    </div>
  );

}


export default Custom404;
