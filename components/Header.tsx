/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

export function Header() {
  const linkStyle = tw`hover:font-bold duration-200 ease-in-out hover:text-white hover:rotate-45`;

  return (
    <header
      class={tw`h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative`}
      style={{
        backgroundImage: 'url(/header_bg.png)',
      }}
    >
      <div class={`rainfall ${tw`w-full h-full absolute`}`} />
      <nav
        class={tw`w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative`}
      >
        <a href='/' class={tw`flex justify-center items-center space-x-2 mt-2`}>
          <img src='/logo.svg' alt='Lime Logo' class={tw`h-14 w-14`} />
          <h1
            class={tw`font-bold text-xl hover:text-2xl hover:text-white duration-200 ease-in-out cursor-pointer`}
          >
            Lime
          </h1>
        </a>
        <h1>
          <div class={tw`space-x-2`}>
            <a href='/about' class={linkStyle}>
              About
            </a>
            <a href='/login' class={linkStyle}>
              Login
            </a>
          </div>
        </h1>
      </nav>
    </header>
  );
}
