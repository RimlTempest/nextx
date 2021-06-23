import React from 'react';
import { Story, Meta } from '@storybook/react';
import particles from '../../particles';
import Background from './Background';
import { BackgroundProps } from '../types/props/BackgroundProps';

export default {
  title: 'Atomics/Background',
  component: Background,
} as Meta;

// Propsのテストパターン
const Template: Story<BackgroundProps> = (args) => <Background {...args} />;

// Propsの型に該当するデータの注入
export const Default = Template.bind({});
Default.args = {
  options: { ...particles },
};
