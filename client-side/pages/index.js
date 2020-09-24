import Link from 'next/link'
import Menucomp from '../components/menu'
import Headcomp from '../components/head'
import Indexblogbox from '../components/indexpageblog/indexblogboxs'

import fetch from 'isomorphic-unfetch'


function index(props) {


  return (
    <>
      <div className="container">
        <Headcomp />
        <Menucomp />
        <main className='main'>
          <div className="main-top">
            <div className="left-side-box">
              <div className="code-container">
                <div className="code-doctype-box">
                  <code>
                    <span>{'<'}</span>
                    <span>!</span>
                    <span>DOCTYPE html</span>
                    <span>{'>'}</span>
                  </code>
                </div>
                <div className="code-html-box">
                  <span>{'<'}</span>
                  <span>html lang="tr"</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-head-box">
                  <span>{'<'}</span>
                  <span>head</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-meta-box">
                  <span>{'<'}</span>
              meta <span>name</span><span>="description"</span> <span>content</span><span>="Front-end Back-end"</span>
                  <span>{' />'}</span>
                </div>
                <div className="code-meta-box">
                  <span>{'<'}</span>
              meta <span>name</span><span>="keywords"</span> <span>content</span><span>="Html, Css, Js, React, NextJS, Php, NodeJS, MongoDB, Mysql, GraphQL, Apache, Nignx, Linux, Docker"</span>
                  <span>{' />'}</span>
                </div>
                <div className="code-meta-box">
                  <span>{'<'}</span>
              meta <span>name</span><span>="author"</span> <span>content</span><span>="Aytaç Abay"</span>
                  <span>{' />'}</span>
                </div>
                <div className="code-title-box">
                  <span>{'<'}</span>
                  <span>title</span>
                  <span>{'>'}</span>
                  <span>Aytaç Abay</span>
                  <span>{'</'}</span>
                  <span>title</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-head-box">
                  <span>{'</'}</span>
                  <span>head</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-body-box">
                  <span>{'<'}</span>
                  <span>body</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-header-box">
                  <span>{'<'}</span>
                  <span>header</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-hello-world-box">
                  <span>{'<'}</span>
                  <span>h1</span>
                  <span>{'>'}</span>
                  <span>Hello World</span>
                  <span>{'</'}</span>
                  <span>h1</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-header-languages-box">
                  <span>{'<'}</span>
                  <span>h3</span>
                  <span>{'>'}</span>
                  <span>Tecrübe Edindiğim Diller ve Servisler</span>
                  <span>{'</'}</span>
                  <span>h3</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-ul-languages-box">
                  <span>{'<'}</span>
                  <span>ul</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>Html</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>Css</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>JavaScript</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>ReactJs</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>NextJS</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>NodeJs</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>Php</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>MongoDB</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>MySQL</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>GraphQL</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>Apache</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>Nginx</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>Linux</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-languages-box">
                  <span>{'<'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                  <span>Docker</span>
                  <span>{'</'}</span>
                  <span>li</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-main-ul-languages-box">
                  <span>{'</'}</span>
                  <span>ul</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-header-box">
                  <span>{'</'}</span>
                  <span>header</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-body-box">
                  <span>{'</'}</span>
                  <span>body</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-html-box">
                  <span>{'</'}</span>
                  <span>html</span>
                  <span>{'>'}</span>
                </div>
                <div className="code-comment-content-box">
                  <span>{"<!--"}</span>
                  <span>Startup projelere yardımcı olmaktan mutluluk duyarim.</span>
                  <span>{"-->"}</span>
                </div>
              </div>
            </div>
            <div className="right-side-box">
              <div className="right-side-main-content-box">
                <div className="img-box">
                  <img src="right.svg" alt="img" />
                </div>
                <h1>Aytaç Abay</h1>
                <h3>Web Developer</h3>
                <p>
                  2016 yilının ortlarında boş zamanlarımda programlamaya duyduğum ilgi ile bu sistem içerisinde birşeyler öğrenmeye başladım. Html, css, javascript derken sistem beni baya içerisine çekti ve daha çok öğrenmek istedim. Kendime bir local sunucu(Ubuntu) kurarak, öğrendiğim dilleri ve servisleri bu sistem üzerinde ayağa kaldırarak tücrübe edindim. Halen yeni şeyler öğrenmeye ve tecrübeler edinmeye devam ediyorum. Bu sayfayı yazmaktaki amacım ise, bu ekosistemde ki arkadaşlarıma paylaşacağım post'lar ile onlara yardımcı olmaktır.
                </p>
              </div>
            </div>
          </div>
          <div className="main-bottom">

            <div className="blog-main-box">
              <div className="blog-main-header-box">
                <h1>Son Yazılarım</h1>
              </div>

              <div className="blog-main-content-container">

                {
                  props.fetchData.map(item => {
                    return <Indexblogbox key={item._id} databox={item} />
                  })

                }

              </div>

            </div>
          </div>
        </main>
        <style jsx>{`

/* -------------------------------------------------------------------------- */
/*                                    Index - Left                            */
/* -------------------------------------------------------------------------- */

.main-top {
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: calc(100vh - 16px);
  grid-template-areas: "LEFT RIGHT";
  border: 8px solid whitesmoke;
}

.left-side-box {
  grid-area: "LEFT";
  background-color: #262836;
  color: rgb(237, 116, 95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 4px solid whitesmoke;
  font-family: sans-serif;
  overflow: scroll;
}

span {
  margin:1px;
}

.code-container {
  padding: 1em;
}
.code-doctype-box {
  margin: 0.3em 0;
  font-size: 1.2em;
  color: rgb(8, 235, 235);
}

.code-html-box {
  margin: 0.3em 0;
  color: rgb(255, 60, 25);
}

.code-head-box {
  margin: 0.3em 0 0.3em 1em;
  color: rgb(255, 60, 25);
}

.code-meta-box {
  margin: 0.3em 0 0.3em 3em;
  color: rgb(255, 60, 25);
}

.code-meta-box > span:nth-child(2),
.code-meta-box > span:nth-child(4) {
  color: rgb(255, 186, 82);
}
.code-meta-box > span:nth-child(3),
.code-meta-box > span:nth-child(5) {
  color: rgb(146, 198, 94);
}

.code-title-box {
  margin: 0.3em 0 0.3em 3em;
  color: rgb(255, 60, 25);
}
.code-title-box > span:nth-child(4) {
  color: rgb(215, 215, 215);
}
.code-body-box {
  margin: 0.3em 0 0.3em 1em;
  color: rgb(255, 60, 25);
}
.code-header-box {
  margin: 0.3em 0 0.3em 3em;
  color: rgb(255, 60, 25);
}
.code-hello-world-box {
  margin: 0.3em 0 0.3em 4em;
  color: rgb(255, 60, 25);
}
.code-hello-world-box > span:nth-child(4) {
  color: rgb(215, 215, 215);
}
.code-comment-content-box{
  margin: 2em 0;
  color: rgb(129, 129, 129);
}
.code-comment-content-box > span:nth-child(2) {
  margin:0 1em;
  color:  rgb(129, 129, 129);
}
.code-header-languages-box {
  margin: 0.3em 0 0.3em 4em;
  color: rgb(255, 60, 25);
}
.code-header-languages-box > span:nth-child(4) {
  color: rgb(215, 215, 215);
}
.code-main-ul-languages-box {
  margin: 0.3em 0 0.3em 4em;
  color: rgb(255, 60, 25);
}
.code-main-languages-box {
  margin: 0.3em 0 0.3em 5em;
  color: rgb(255, 60, 25);
}
.code-main-languages-box > span:nth-child(4) {
  color: rgb(215, 215, 215);
}

/* -------------------------------------------------------------------------- */
/*                                    Right                                   */
/* -------------------------------------------------------------------------- */

    .right-side-box {
  grid-area: "RIGHT";
  /* background-color: rgb(130, 238, 250); */
  background-color: rgb(255, 132, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 4px solid whitesmoke;
  font-family: sans-serif;
  overflow: scroll;
}

.right-side-main-content-box {
  width: 90%;
  box-sizing:border-box;
}

.right-side-main-content-box > .img-box {
  width: 100%;
}
.right-side-main-content-box > .img-box > img {
  width: 100%;
}

.right-side-main-content-box > h1 {
  margin: 0.7em 0;
  font-size: 2.5rem;
  color: rgba(245, 245, 245, 0.681);
}
.right-side-main-content-box > h3 {
  color: #3f3d55;
  font-size: 1.5em;
}
.right-side-main-content-box > p {
  margin: 1em 0;
  color: rgba(245, 245, 245, 0.681);
  font-size:1rem;
}

/* 
    -----------
    Bottom page
    -----------
*/

.main-bottom {
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  grid-template-areas: "CONTENT";
  font-family: sans-serif;
}

.blog-main-box {
  background-color:transparent;
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.blog-main-header-box {
  text-align: center;
  margin: 2em 0;
  color: #59586c;
}

.blog-main-content-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;
}

@media (max-width: 1200px) {
  .container {
    scroll-snap-type: none;
  }

  .main-top {
    scroll-snap-align: start;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
      "LEFT"
      "RIGHT";
    border: none;
  }
  .left-side-box {
    border: none;
  }

  .right-side-box {
    border: none;
  }

  .right-side-main-content-box > p {
    margin: 1em 0 3em 0;
  }
  .main-bottom {
    scroll-snap-align: end;
    grid-template-rows: auto;
    padding-bottom:2em;
  }
  .blog-main-header-box {
    border-bottom:3px solid #f49229;
  }
  .blog-main-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
  }

  .blog-main-content-boxs {
    width: 95%;
    margin: 0 auto 3em;
    background-color: transparent;
    box-shadow: 0 0.2em 0.5em black;
    border-radius: 0.3em;
    align-self: start;
  }
}

    
    `}</style>


      </div>

    </>
  )
}

export default index;

index.getInitialProps = async (context) => {
  const res = await fetch(`http://192.168.254.2:8558/blog-get-content-three`)
  const json = await res.json()
  return { fetchData: json.getData.getData }
}