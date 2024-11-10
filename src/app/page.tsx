import Link from "next/link";


export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Complete Redux Toolkit in Next Js with Typescript
      </h1>

      <ul className="text-xl my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/shop">Cart Functionality</Link>
        </li>
        <li>
          <Link href="/form">Multi Step Form</Link>
        </li>
      </ul>
    </div>
  );
}
