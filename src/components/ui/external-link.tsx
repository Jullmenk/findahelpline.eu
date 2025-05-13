import Link from 'next/link'
import React from 'react'

export default function ExternalLink({path,name}: {path: string, name: string}) {
  return (
    <Link
    href={path}
    target="_blank"
    >
    {name}
    </Link>
  )
}
