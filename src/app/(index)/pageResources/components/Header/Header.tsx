import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex h-[384px] w-full flex-col items-center justify-center bg-[url('/background-efood.svg')] pt-10">
      <Image
        src="/logo-efood.svg"
        alt="E-food"
        width={125}
        height={57}
        quality={100}
      />
      <h1 className="mt-[138px] max-w-[539px] text-center text-4xl font-black text-efood-red-100">
        Viva experiências gastronômicas no conforto da sua casa
      </h1>
    </header>
  )
}
