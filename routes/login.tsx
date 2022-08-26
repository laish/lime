/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { Header } from '../components/Header.tsx';

export default function Login() {
  return (
    <div>
      <Header />
      <div
        class={tw`mx-4 p-4 mx-auto max-w-screen-md bg-red-100 mt-10 rounded-md pb-10`}
      >
        <p class={tw`my-6 text-2xl text-center text-gray-600`}>Login</p>
        <p class={tw`my-6 text-md text-center text-gray-600`}>
          Enter your email and password to login.
        </p>
        <form class={tw`flex flex-col`}>
          <label class={tw`text-gray-600 mx-auto w-1/2`}>Email</label>
          <input class={tw`w-1/2 p-2 rounded-md mx-auto`} type='email' />
          <label class={tw`text-gray-600 mt-4 mx-auto w-1/2`}>Password</label>
          <input class={tw`w-1/2 p-2 rounded-md mx-auto`} type='password' />
          <button
            class={tw`font-bold mt-4 w-1/2 mx-auto p-2 bg-red-500 text-white hover:bg-red-600 duration-200 ease-in-out rounded-md`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
