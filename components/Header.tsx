import Link from "next/link";

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle = "My Portfolio" }) => (
  <header className="custom-font-color py-8">
    <div className="w-full lg:max-w-[1366px] mx-auto px-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link href="/">
          <span className="hover:text-teal-300 cursor-pointer">{siteTitle}</span>
        </Link>
      </h1>
      <nav>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link href="/projects">
              <span className="hover:text-teal-300 cursor-pointer">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-teal-300 cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-teal-300 cursor-pointer">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
