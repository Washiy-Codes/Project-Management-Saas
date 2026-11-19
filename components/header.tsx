
import { buttonVariants } from '@/components/ui/button'
import { LucideKanban } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <nav className="flex justify-between py-2.5 px-5
      border-b w-full fixed left-0 right-0 top-0 z-20
      supports-backdrop-blur:bg-background/80 backdrop-blur-sm">

      <div>
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          <LucideKanban />
          <h1 className="text-lg ml-2 font-bold">Home</h1>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/tasks">
         <Button variant="default">Tasks</Button>
        </Link>
      </div>
    </nav>
  )
}

export { Header }
