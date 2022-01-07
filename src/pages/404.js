import React from 'react'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <>
      <PageHeader />
      <main className='wrap'>
        <h1>Page Not Found</h1>
        <p>Oops, we couldn't find this page!</p>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
