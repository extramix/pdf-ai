import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Theodore is now public!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Chat with your <span className='text-blue-600'>Documents </span>
          in seconds
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          I think this one is a description, maybe idk tho. I think this one is
          a description, maybe idk tho.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/dashboard'
          target='_blank'
        >
          Get Started <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>

      {/* VALUE PREP SECTION*/}
      <div>
        <div className='relative isolate'>
          <div></div>
        </div>
      </div>
    </>
  );
}
