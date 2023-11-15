// import { AppRouter } from '@/trpc';
// import { createTRPCReact } from '@trpc/react-query';

// // create a context that holds the client
// export const trpc = createTRPCReact<AppRouter>({});

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/trpc';
//     👆 **type-only** import
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCReact<AppRouter>({});
