/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

export default function () {
  const linkStyle = tw`hover:font-bold duration-200 ease-in-out hover:text-white hover:rotate-45`;
  return (
    <div
      class={tw`flex justify-between bg-red-400 p-4 align-middle p-4 items-center`}
    >
      <h1
        class={tw`font-bold text-xl hover:text-2xl hover:text-white duration-200 ease-in-out cursor-pointer`}
      >
        <a href="/" class={tw`flex items-center justify-center space-x-2`}>
          <img
            src="/logo.svg"
            class={tw`h-8 w-8`}
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p> Lime</p>
        </a>
      </h1>
      <div class={tw`space-x-2`}>
        <a href="/about" class={linkStyle}>
          About
        </a>
        <a href="/login" class={linkStyle}>
          Login
        </a>
      </div>
    </div>
  );
}
