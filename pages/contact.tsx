
import { Inter } from 'next/font/google'

import { ReactElement } from 'react'
import Link from 'next/link'

import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'


const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <>
      <h1>Contact Page</h1>

      <h1 className= {'title'}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a<Link href="/"> Home</Link>
      </h1>

      <h1 className= {'title'}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a<Link href="/about"> About</Link>
      </h1>

      <h1 className= {'title'}>
        {/* Ir a <a href="/">Home</a> */}
        Ir a<Link href="/pricing"> Pricing</Link>
      </h1>

      <div className={'description'}>
        <p>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.js</code>
        </p>
      </div> 
    </>
  )
}

ContactPage.getLayout = function getLayout( page: ReactElement ) {
  return(
    <MainLayout>
        <DarkLayout>
          { page }  
        </DarkLayout>
    </MainLayout>  
  )  
}