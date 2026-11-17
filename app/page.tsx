import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-18 flex flex-col gap-2 p-4">
      <h1>This is your homepage to start</h1>

      <Link href="/tasks" className="text-blue-500 underline">
        View tasks
      </Link>
    </div>
  );
}