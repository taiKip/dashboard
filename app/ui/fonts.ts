import {  Nunito_Sans, Lusitana} from 'next/font/google';

export const nunito_sans = Nunito_Sans({
    subsets: ['latin'],
    variable: '--font-nunito-sans',
   display:'swap'
});

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight:["400","700"]
})