import Head from "next/head"

const Layout = ({title, description, children}: Props) => {
return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
    <main>
        {children}
    </main>
    </>
)
}

export type Props = {
    title: string;
    description: string;
    children: React.ReactNode;
}
export default Layout