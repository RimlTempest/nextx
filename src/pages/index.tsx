import Image from 'next/image';
import { useRouter } from 'next/router';
import { useHello } from '../hooks/useHello';
import styles from '../styles/Home.module.css';
import { Button } from '../components/Button';

const Home = () => {
  const { data } = useHello(
    'NextX',
    'NextXはNext.jsのテンプレートです。\
    TypeScript対応、Storybook, tailwind他にもNextjsのライブラリを導入したりhuskyの設定をする手間を省くために制作いたしました。\
    Reactの入りや勉強に活用できるようにコメントやドキュメントを用意しています。\
    NextX is a template for Next.js.\
    NextX is a that supports TypeScript,\
    Storybook, tailwind, and other Next.js libraries to save you the trouble of setting up husky. \
    Sans Fallback Comments and documentation are provided to help you get started and learn React.'
  );

  const router = useRouter();

  const handleToNext = () => {
    window.location.href = 'https://Nextjs.org';
  };
  const handleToGithub = () => {
    window.location.href = 'https://github.com/RimlTempest/nextx';
  };

  return (
    <div className={styles.container}>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {data?.message}! Welcome to{' '}
              <a className="text-blue-500 no-underline" href="https://github.com/RimlTempest/nextx">
                {data?.name}
              </a>
            </h1>
            <p className="mb-8 leading-relaxed">{data?.description}</p>
            <div className="flex justify-center">
              <Button label="Next.js公式へ" size={'large'} onClick={handleToNext} />
              <span className="ml-4">
                <Button primary={true} label="Githubへ" size={'large'} onClick={handleToGithub} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
