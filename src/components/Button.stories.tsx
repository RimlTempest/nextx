import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from '../types/props/ButtonProps';

export default {
  title: 'Atomics/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Propsのテストパターン
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Propsの型に該当するデータの注入
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
