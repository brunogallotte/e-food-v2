export default function FacebookMd(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#E66767"
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0Zm2.648 9.966-.136 1.795H12.67v6.234h-2.325v-6.234H9.103V9.966h1.242V8.76c0-.53.014-1.35.399-1.861.408-.54.965-.905 1.926-.905 1.566 0 2.222.225 2.222.225l-.31 1.838s-.515-.15-.998-.15c-.482 0-.914.173-.914.656v1.402h1.978Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
