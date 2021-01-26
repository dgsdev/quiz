import Head from 'next/head'

function Head({ bg, title, description }) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="pt_BR" />

        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Quiz FullStack Developer" />
        <meta property="og:description" content={description} />
        
        <meta property="og:image" content={bg} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:type" content="website"></meta>
        
        <meta charSet="utf-8" />

        <link rel="canonical" href="https://quiz-beta.vercel.app/" />
    </Head>
  )
}

export default Head;