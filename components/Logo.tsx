import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Logo strony" width={100} height={100} className="min-w-24"/>
    </Link>
  );
};

export default Logo;
