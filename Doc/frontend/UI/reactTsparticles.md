# react-tsparticles

パーティクルを作成するための軽量JavaScriptライブラリの*particles.js*のReactラッパーライブラリ。

## 使い方

```TypeScript
import { VFC } from 'react';
import Particles, { IOptions, RecursivePartial } from 'react-tsparticles';

export interface BackgroundProps {
  options: RecursivePartial<IOptions> | undefined;
}

// VFCで定義しているが実際のところJSX.Elementで良い
const Background: VFC<BackgroundProps> = (props) => {
  const particlesInit = (main: any) => {
    console.log(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      className="fixed top-0 right-0 bottom-0 left-0 -z-10"
      init={particlesInit}
      loaded={particlesLoaded}
      options={props.options}
    />
  );
};

export default Background;
```

のようにライブラリから`Particles`コンポーネントを使用し*options*にそれぞれアニメーションの設定を追加します。

このプロジェクトでは`particles.ts`にアニメーションの設定をしています。

有名な*NyaaCat*のアニメーションを設定しました。
