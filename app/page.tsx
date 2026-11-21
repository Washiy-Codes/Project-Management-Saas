import Link from "next/link";
import {Heading} from "@/components/heading"

export default function Home() {
  return (
    <div className="mt-18 flex flex-col gap-2 p-4">
      <Heading title="Home" description="This is your homepage to start"/>
      <div className="flex items-center flex-col flex-1">
      <Link href="/tasks" className="text-blue-500 underline">
        View tasks
      </Link>
      </div>
    </div>
  );
}