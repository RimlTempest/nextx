import { useHello } from '../hooks/useHello';
import Button from '../components/Button';

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

  const handleToNext = () => {
    window.location.href = 'https://Nextjs.org';
  };
  const handleToGithub = () => {
    window.location.href = 'https://github.com/RimlTempest/nextx';
  };

  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {data?.message}! Welcome to{' '}
              <a className="text-blue-500 no-underline" href="https://github.com/RimlTempest/nextx">
                {data?.name}
              </a>
            </h1>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5 m-10">
              <p className="leading-relaxed">{data?.description}</p>
            </div>
            <div className="flex justify-center">
              <Button label="Next.js公式へ" size={'large'} onClick={handleToNext} />
              <span className="ml-4">
                <Button primary={true} label="Githubへ" size={'large'} onClick={handleToGithub} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
