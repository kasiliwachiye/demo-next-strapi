import Image from "next/image";
import Link from "next/link";
import logo from "../../public/optiven-logo-full.png";

export const Navbar = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            alt="logo"
            src={logo}
            width={180}
            height={100}
          />
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
