import Link from 'next/link'
import React from 'react'

type props = {
  href : string;
  name: string;
  className: string;
  target?: string;
}

export default function ExternalLink({href,name,className,target}: props) {
  return (
    <Link
    className={className}
    href={  href}
    target={target}
    >
    {name}
    </Link>
  )
}
