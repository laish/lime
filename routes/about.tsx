/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { Header } from '../components/Header.tsx';

export default function About() {
  return (
    <div>
      <Header />
      <div
        class={tw`p-4 mx-auto max-w-screen-md bg-red-100 mt-10 rounded-md text-center justify-center align-center text-gray-800`}
      >
        Version 1.0.0
        <br />
        2022 &copy; Lime. All Rights Reserved.
      </div>
    </div>
  );
}
