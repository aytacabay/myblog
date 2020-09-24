import Head from 'next/head'

export default function Headcomp() {
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168600769-1"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());
    
                        gtag('config', 'UA-168600769-1');
                        `
                    }}
                />
                <meta charSet="UTF-8" />
                <meta name="description" content="Front-end Back-end" />
                <meta name="keywords" content="Html, Css, Js, Php, NodeJS, MongoDB, NoSql, GraphQL, Linux, Docker" />
                <meta name="author" content="Aytaç Abay" />
                <title>aytacabay</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

        </>
    )
}
