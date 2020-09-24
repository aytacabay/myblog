import Headcomp from "../components/head";
import Menucomp from "../components/menu";

import fetch from 'isomorphic-unfetch'

import Blogboxs from "../components/blogpagelist/blogboxs";
import Blogpagecategory from "../components/blogpagelist/blogpagecategory";
import { useState } from "react";

function blog(props) {
  const [tag, setTag] = useState('all')

  function setTagFunc(param1) {
    setTag(param1);
  }

  return (
    <div className="blog-container">
      <Headcomp />
      <Menucomp />
      <Blogpagecategory setTagFunc={setTag} />

      <div className="blog-languages-box">
        {props.fetchData.map((item) => {
          if (tag === 'all') {
            return <Blogboxs key={item._id} tag={item.tag} databox={item} />;
          } else if (item.tag === tag) {
            return <Blogboxs key={item._id} tag={item.tag} databox={item} />;
          }
        })}
      </div>

      <style jsx>{`
        .blog-container {
          background-color: transparent;
          font-family: sans-serif;
        }

        .blog-languages-box {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
      `}</style>

    </div>
  );
}

export default blog;

blog.getInitialProps = async (context) => {
  const res = await fetch(`http://192.168.254.2:8558/blog-get-content-all`)
  const json = await res.json()
  return { fetchData: json.getData.getData }
}

