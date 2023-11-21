'use client';
import { trpc } from '@/app/_trpc/client';
import ChatInput from './ChatInput';
import Messages from './Messages';
import { Loader2, XCircle } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

interface ChatWrapperProps {
  fileid: string;
}

const ChatWrapper = ({ fileid }: ChatWrapperProps) => {
  const { data, isLoading } = trpc.getFileUploadStatus.useQuery(
    {
      fileid,
    },
    {
      refetchInterval: (data) =>
        data?.status === 'SUCCESS' || data?.status === 'FAILED' ? false : 500,
    }
  );

  if (isLoading)
    return (
      <div className='relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2'>
        <div className='flex-1 flex justify-center items-center flex-col mb-28'>
          <div className='flex flex-col items-center gap-2'>
            <Loader2 className='h-8 w-8 text-blue-500 animate-spin' />
            <h3 className='font-semibold text-xl'>Loading...</h3>
            <p className='text-zinc-500 text-sm'>
              We&apos;re preparing your PDF.
            </p>
          </div>
        </div>
      </div>
    );

  if (data?.status === 'PROCESSING')
    return (
      <div className='relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2'>
        <div className='flex-1 flex justify-center items-center flex-col mb-28'>
          <div className='flex flex-col items-center gap-2'>
            <Loader2 className='h-8 w-8 text-blue-500 animate-spin' />
            <h3 className='font-semibold text-xl'>Processing PDF...</h3>
            <p className='text-zinc-500 text-sm'>This won&apos;t take long.</p>
          </div>
        </div>
      </div>
    );

  if (data?.status === 'FAILED')
    return (
      <div className='relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2'>
        <div className='flex-1 flex justify-center items-center flex-col mb-28'>
          <div className='flex flex-col items-center gap-2'>
            <XCircle className='h-8 w-8 text-red-500' />
            <h3 className='font-semibold text-xl'>PDF has too many pages!</h3>
            <p className='text-zinc-500 text-sm'>
              Your free plan has limits. Subscribe to our plans
            </p>
            <Link
              href={'/dashboard'}
              className={buttonVariants({
                variant: 'secondary',
                className: 'mt-4',
              })}
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    );

  return (
    <div className='relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200'>
      <div className='flex-1 justify-between flex flex-col mb-28'>
        <Messages />
      </div>

      <ChatInput isDisabled />
    </div>
  );
};

export default ChatWrapper;
