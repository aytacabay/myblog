import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function ContentData() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://192.168.254.2:8558/blog-get-content-all')
            .then(function (response) {
                setData(response.data.getData.getData)
            })
    }, [])

    let date = new Date();

    const headerRef = useRef()
    const seoheaderRef = useRef()
    const tagRef = useRef()
    const authorRef = useRef()
    const infoRef = useRef()
    const contentdataRef = useRef()

    const [content, setContent] = useState([])
    const [counter, setCounter] = useState(0)
    let payload = [];
    function saveFunc() {
        let contentRef = '<p> ' + contentdataRef.current.value + ' </p>';
        setCounter(content.length + 1)

        if (content.length > 0) {
            payload.push(...content)
        }
        payload.push(contentRef)
        setContent(payload)

        contentdataRef.current.value = ''
    }

    async function sendFunc() {
        let header = headerRef.current.value;
        let seoheader = seoheaderRef.current.value;
        let tag = tagRef.current.value;
        let author = authorRef.current.value;
        let info = infoRef.current.value;

        let index = 0;
        var payloadTimeStore = [];
        for (index; index < content.length; index++) {
            payloadTimeStore.push(content[index].split(" ").length)
        }

        let timePayload = 0;
        payloadTimeStore.forEach(item => {
            timePayload += Number(item)
        });

        let timeDate = '';
        if (timePayload < 100) {
            timeDate = '0.30 Saniye'
        } else if (timePayload < 500) {
            timeDate = '3 Dakika'
        } else if (timePayload < 1000) {
            timeDate = '5 Dakika';
        } else if (timePayload < 1500) {
            timeDate = '8 Dakika';
        } else if (timePayload < 2000) {
            timeDate = '10 Dakika';
        } else if (timePayload < 2500) {
            timeDate = '13 Dakika';
        } else if (timePayload < 3000) {
            timeDate = '15 Dakika';
        } else if (timePayload < 3500) {
            timeDate = '18 Dakika';
        } else if (timePayload < 4000) {
            timeDate = '20 Dakika';
        } else if (timePayload < 4500) {
            timeDate = '23 Dakika';
        } else if (timePayload < 5000) {
            timeDate = '25 Dakika';
        } else if (timePayload < 5500) {
            timeDate = '28 Dakika';
        } else {
            timeDate = '30 Dakikadan fazla';
        }

        let postData = {
            _id: Math.floor(Math.random() * 20) + 10,
            header,
            seoheader,
            tag,
            date: date,
            info,
            content,
            author,
            readtime: timeDate,
            pass: '5@#1ˆ2*{&!c'
        };
        const options = {
            url: 'http://192.168.254.2:8558/blog-set-content/',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: postData
        };

        await axios(options).then((response) => { alert('Data Basarili bir sekilde gonderildi') });

        headerRef.current.value = ''
        seoheaderRef.current.value = ''
        tagRef.current.value = ''
        contentdataRef.current.value = ''
        infoRef.current.value = ''
    }


    return (
        <>
            <div className="container">
                <form action="" method="post">
                    <label htmlFor="header">Header</label>
                    <input ref={headerRef} type="text" id="header" name="header" placeholder="Header.." />

                    <span>Used-Seo-Header</span>
                    <div className='tags-seoheader'>
                        {
                            data.map(item => {
                                return <span key={item._id}>{item.seoheader}</span>
                            })
                        }
                    </div>

                    <label htmlFor="seoheader">Seo-Header</label>
                    <input ref={seoheaderRef} type="text" id="seoheader" name="seoheader" placeholder="Header.." />

                    <span>Used-Tags</span>
                    <div className='tags-seoheader'>
                        {
                            data.map(item => {
                                return <span key={item._id}>{item.tag}</span>
                            })
                        }
                    </div>

                    <label htmlFor="tag">Tag</label>
                    <input ref={tagRef} type="text" id="tag" name="tag" placeholder="Tag.." />

                    <span>Content-Data-Rules</span>
                    <div className='contentDataHelp'>
                        <span>Kalin veya Italic Yazmak icin b ve i tag larini kullan.</span>
                        <span>Code yazarken pre etiketi icerisinde code etiketi kullanarak yaz. </span>
                        <span>Img i ilk satira ekleme cunku p taginda ilk kelime icin ayarlama var.</span>
                        <span>Img tagini div icerisinde yaz css ayarlari icindir.</span>
                        <span>Img i ic ice ayni div icerisinde kullanabilirsin.</span>
                        <span>Image ekrana basarken static klasorune src kismindan '/imgName.SVG' ile direk ulasabilirsin.</span>
                        <span>Static image isimleri language isimleridir.</span>
                    </div>

                    <div className="contentdata">
                        <label htmlFor="contentdata">Content-Data</label>
                        <textarea ref={contentdataRef} id="contentdata" name="contentdata" placeholder="Write something.."></textarea>
                        <button className='button' onClick={saveFunc} type="button">Save</button>
                        <span style={{ marginLeft: '1em', }}>Data Counter : {counter}</span>
                    </div>

                    <label htmlFor="contentinfo">Content-info</label>
                    <textarea ref={infoRef} id="contentinfo" name="contentinfo" placeholder="Write something.."></textarea>

                    <label htmlFor="author">Author</label>
                    <input ref={authorRef} type="text" id="author" name="author" placeholder="Author.." />

                    <button className='button' type="button" onClick={sendFunc}>Send</button>
                </form>
            </div>
        </>
    );
}

export default ContentData;
