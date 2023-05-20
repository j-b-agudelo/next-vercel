
import { Inter } from 'next/font/google'

import { ReactElement } from 'react'
import Link from 'next/link'

import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'



const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
      <h1>Pricing Page</h1>

      <h1 className= {'title'}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a<Link href="/"> Home</Link>
      </h1>

      <h1 className= {'title'}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a<Link href="/about"> About</Link>
      </h1>

      <h1 className= {'title'}>
        {/* Ir a <a href="/about">About</a> */}
        Ir a<Link href="/contact"> Contact</Link>
      </h1>

      <div className={'description'}>
        <p>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing/index.js</code>
        </p>
      </div>
    </> 
  )
}

HomePage.getLayout = function getLayout( page: ReactElement ) {
  return(
    <MainLayout>
        <DarkLayout>
          { page }  
        </DarkLayout>
    </MainLayout>  
  )  
}
