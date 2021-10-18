import Link from 'next/link';

export default function custom404() {
  return (
    <div id='Error404Container'>
      <Link href='/'>
        <img
          id='HomeLink404'
          src='/assets/images/404(2).png'
          alt="Sorry , we couldn't find that page, try searching or go to Amazon home page"
        />
      </Link>
      <a href='https://www.amazon.com/dogsofamazon' target='_blank'>
        <img src='/assets/images/404.jpg' alt='meet the dogs of amazon' />
      </a>
    </div>
  );
}
