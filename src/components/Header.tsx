import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-300 p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 text-2xl font-bold">
          Hello
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href="/blogs" className="text-blue-600 hover:outline">
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/api/auth/signin"
              className="text-blue-600 hover:outline"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
