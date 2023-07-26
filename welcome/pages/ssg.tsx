import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

type SSGPros = {
    message: string;
}

const SSG: NextPage<SSGPros> = (props) => {
    const { message } = props

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>이 페이지는 정작 사이트 생성을 통해 빌드됨.</p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSGPros> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}에 getStaticProps가 실행되었습니다.`
    console.log(message)
    return {
        props: {
            message
        }
    }
}

export default SSG
