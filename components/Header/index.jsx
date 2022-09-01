import Head from 'next/head';

const HeadComponent = (props) =>{
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.content} />
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
export default HeadComponent;