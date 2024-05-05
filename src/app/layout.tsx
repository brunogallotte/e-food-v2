import { Roboto } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import InstagramMd from '@/components/icons/InstagramMd'
import FacebookMd from '@/components/icons/FacebookMd'
import TwitterMd from '@/components/icons/TwitterMd'
import { CartContextProvider } from '@/contexts/CartContext'
import { Toaster } from 'sonner'

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-efood-beige-100 ${roboto.className}`}>
        <CartContextProvider>{children}</CartContextProvider>
        <footer className="flex h-[298px] w-full flex-col items-center justify-center bg-efood-beige-200 pt-10">
          <Image
            src="/logo-efood.svg"
            alt="E-food"
            width={125}
            height={57}
            quality={100}
          />
          <div className="mt-8 flex gap-2">
            <InstagramMd className="cursor-pointer" />
            <FacebookMd className="cursor-pointer" />
            <TwitterMd className="cursor-pointer" />
          </div>
          <p className="mt-20 max-w-[480px] text-center text-[10px] text-efood-red-100">
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.{' '}
          </p>
        </footer>
        <Toaster richColors />
      </body>
    </html>
  )
}
