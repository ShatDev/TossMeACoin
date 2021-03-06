import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { TMACContext } from '../context/TossMeACoinContext';
import Button from './Button';

const Navbar = () => {
  const { account, connectWallet } = useContext(TMACContext);

  return (
    <nav>
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 h-[10vh]">
        <div className="relative flex items-center justify-between h-16">
          <Link href="/" passHref>
            <div className="flex-shrink-0 flex items-center">
              <div className="hidden sm:block h-16 w-32 w-auto cursor-pointer">
                <Image
                  src="/Logo.svg"
                  alt="Toss Me A Coins"
                  width="240"
                  height="64"
                />
              </div>
              <div className="block sm:hidden h-16 w-32 w-auto cursor-pointer">
                <Image
                  src="/LogoSmall.svg"
                  alt="Toss Me A Coins"
                  width="64"
                  height="64"
                />
              </div>
            </div>
          </Link>

          <div>
            {account ? (
              <Link href={`/${account}`} passHref>
                <div className="bg-[#6666ff] hover:bg-[#5e17eb] text-white font-bold py-2 px-4 rounded-full cursor-pointer">{`${account.substring(
                  0,
                  5
                )}...${account.substring(36, 41)}`}</div>
              </Link>
            ) : (
              <Button onClick={connectWallet}>Connect wallet</Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
