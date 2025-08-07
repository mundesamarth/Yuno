import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World!!</h1>
      <div className="p-4">
        <Link href="/dashboard">
          <button className="w-full bg-purple-600 text-white rounded-md py-2">
            Back to dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
