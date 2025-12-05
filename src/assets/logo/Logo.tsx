import logo from '@/assets/logo/logoipsum-415.svg';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;