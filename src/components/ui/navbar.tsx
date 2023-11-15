import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { buttonVariants } from './button';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <nav className='sitcky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
          <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Link href='/' className='flex z-40 font-semibold'>
              <span>Niche</span>
            </Link>

            <div className='hidden items-center space-x-3 sm:flex'>
              <>
                <Link
                  href='/pricing'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Pricing
                </Link>
                <LoginLink
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}
                >
                  Login
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({
                    size: 'sm',
                  })}
                >
                  Get Started <ArrowRight className='ml-1.5' />
                </RegisterLink>
              </>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
