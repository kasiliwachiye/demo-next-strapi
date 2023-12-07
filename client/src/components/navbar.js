import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          OPTIVEN LOGO
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};