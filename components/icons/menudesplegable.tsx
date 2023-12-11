import * as React from "react"
import { SVGProps } from "react"
const MenuDes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#5243C2"
          d="M26.667 28v1.333h-7.334V28h7.334ZM30 23.333v1.334H18v-1.334h12Zm-1.333-4.666V20h-7.334v-1.333h7.334Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <rect width={48} height={48} fill="#fff" rx={24} />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M16 16h16v16H16z" />
      </clipPath>
    </defs>
  </svg>
)
export default MenuDes
