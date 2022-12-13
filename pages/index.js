import Head from 'next/head'
import ContactUs from '../Components/ContactUs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sendgrid Contact Form</title>
        <meta
          name="description"
          content="A working contact form with Sendgrid integration and form validations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <ContactUs />
      </main>
    </>
  )
}
