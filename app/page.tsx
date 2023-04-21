import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header className='w-full bg-white justify-center flex'>
        <div className='h-[71px] w-[1400px] justify-center flex items-center'>
        <a className='mr-[88px]'><Image src={'images/logo.png'} alt={''} width={228} height={40}  /></a>
          <nav className="flex items-center fontATM text-[17px]">
            <a className='h-[100%] block uppercase' href='#'>Tin tức sự kiện</a><span className='px-[50px]'>|</span>
            <a className='h-[100%] block uppercase' href='#'>Về chúng tôi</a><span className='px-[50px]'>|</span>
            <a className='h-[100%] block uppercase' href='#'>Sản phẩm</a><span className='px-[50px]'>|</span>
            <a className='h-[100%] block uppercase' href='#'>Đối tác</a><span className='px-[50px]'>|</span>
            <a className='h-[100%] block uppercase' href='#'>Liện hệ</a>
          </nav>
        </div>        
      </header>
      <section className='h-[590px] bg-slate-300'>

      </section>
      <main>
        <div>11111111</div>
      </main>
    </>
  )
}
