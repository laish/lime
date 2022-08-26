/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import Counter from '../islands/Counter.tsx';
import { Header } from '../components/Header.tsx';

export default function Home() {
  return (
    <div>
      <Header />
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <div
          class={tw`p-4 mx-auto max-w-screen-md bg-red-100 mt-10 rounded-md text-center justify-center align-center text-gray-800`}
        >
          <Counter start={3} />
        </div>
      </div>
    </div>
  );
}
