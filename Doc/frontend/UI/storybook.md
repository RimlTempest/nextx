# Storybook

コンポーネントのカタログでコンポーネントライブラリの参照ができ、各コンポーネントのさまざまな状態の表示などができるものとなります。
アプリ外で実行されるため、*UI コンポーネント*を単独で開発でき、コンポーネントの再利用、テストの容易性、開発のスピードを向上させることができます。

## 使い方

*compornent* ディレクトリにコンポーネントを作成し、それをもとに`コンポーネント名.stories.tsx`のように命名したカタログファイルを作成する

```TypeScript
// buttonコンポーネント
import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const baseButton = 'rounded-full font-bold';
  const sizeMode =
    size === 'small'
      ? 'py-1.5 px-4 text-xs'
      : size === 'medium'
      ? 'py-2 px-5 text-sm'
      : size === 'large'
      ? 'py-3 px-6 text-base'
      : '';
  return primary ? (
    <div>
      <button
        type="button"
        className={`text-white bg-blue-400 ${baseButton} ${sizeMode}`}
        {...props}
      >
        {label}
      </button>
    </div>
  ) : (
    <button
      type="button"
      className={`text-gray-600 bg-transparent shadow-inner ${baseButton} ${sizeMode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
```

上のコンポーネントをもとにカタログファイルを作成する

```TypeScript
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

```

`yarn storybook`を実行することで `localhost:6006` で *Storybook* を開くことができる。  
*storybook* は`yarn build-storybook`を実行することでビルドすることもできます。
