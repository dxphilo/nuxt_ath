// file: ~/server/api/auth/[...].ts
import GoogleProvider from 'next-auth/providers/google'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: '<your-google-client-id-here>',//replace with the cliendID from google console
      clientSecret: '<your-google-client-secret-here>',//replace with the ClientSecret from google console
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
})