import Link from "next/link";
import { ROUTER } from "@/router/router.enum";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link href={ROUTER.HOME}>Home</Link>
          <Link href={ROUTER.CARDS}>Cards</Link>
        </nav>
        <span>Marvel Heroes</span>
      </header>
    </>
  );
};

export default Header;
