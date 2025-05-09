import Lang from '@/assets/lang'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import React from 'react'

export default function LangContainer({close}: {close: () => void}) {
  return (
    <div>
        <div className='w-full flex justify-between items-center'>
            <div>
                <Lang />
                <h1>Idioma</h1>
            </div>
            <div>
                <Button
                className="flex px-5 py-2 hover:shadow-theme rounded-lg text-sm bg-zinc-100 hover:bg-zinc-200 justify-between items-center"
                >
                    <p>Fechar</p>
                    <X />
                </Button>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
