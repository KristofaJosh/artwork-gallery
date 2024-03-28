'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export const BackButton = () => {
    const router = useRouter();
    return (
        <button onClick={router.back} className={'rounded bg-gray-100 p-2'}>
            Back
        </button>
    );
};
