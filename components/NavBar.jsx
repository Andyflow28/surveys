import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center py-4">
      <div className="w-24 py-5 px-6 bg-blue-900 rounded-full ml-5">
        <Image
          alt="user icon"
          src="/img/login/graf.png"
          width="64"
          height="64px"
        />
      </div>
      <div className="flex ml-auto mr-5">
        <div className="w-28 h-14 rounded-full bg-white flex items-center justify-center text-blue-900 font-extrabold text-2xl mr-10 hover:bg-blue-900 hover:text-white transition duration-300">
          <Link href="#">
            <a>News</a>
          </Link>
        </div>
        <div className="w-28 h-14 rounded-full bg-white flex items-center justify-center text-blue-900 font-extrabold text-2xl mr-10 hover:bg-blue-900 hover:text-white transition duration-300">
          <Link href="#">
            <a>Blog</a>
          </Link>
        </div>
        <div className="w-40 h-14 rounded-full bg-white flex items-center justify-center text-blue-900 font-extrabold text-2xl mr-10 hover:bg-blue-900 hover:text-white transition duration-300">
          <Link href="/DashBoard">
            <a>Dashboard</a>
          </Link>
        </div>
        <div className="w-32 h-14 rounded-full bg-white flex items-center justify-center text-red-700 font-extrabold text-2xl mr-10 hover:bg-red-700 hover:text-white transition duration-300">
          <Link href="#">
            <a>Logout</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
