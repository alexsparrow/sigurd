import Head from 'next/head'
import dynamic from 'next/dynamic'


const SigurdRunner = dynamic(
  () => import('../components/SigurdRunner'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sigurd Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero">
        <div className="hero-body" style={{ paddingBottom: "1rem" }}>
          <h1 className="title">Sigurd</h1>
          <h2 className="subtitle">An experimental language</h2>
        </div>
      </section>

      <main>
        <SigurdRunner />
      </main>
    </div>
  );
}
