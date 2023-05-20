
import { useRouter } from 'next/router';

import Link from 'next/link';
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
    text: string;
    href: string; 
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    //const router = useRouter(); //El asPath se encuentra dentro de router
    const { asPath} = useRouter();
    //console.log(router);

  return (
    <Link legacyBehavior href={ href }>
      {/* <a style={ style }>{ text }</a> */}
      <a style={ asPath === href ? style : undefined }>{ text }</a> 
    </Link>
    
  );
};
