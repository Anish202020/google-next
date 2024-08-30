'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error; // Ensure error is of type Error
  reset: () => void; // Function to reset the error state
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>Something went wrong!</h1>
      <button onClick={reset} className='text-blue-500'>
        Try again
      </button>
    </div>
  );
}
