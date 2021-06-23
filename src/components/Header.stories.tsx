import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Morecules/Header',
  component: Header,
} as Meta;

// Propsのテストパターン
const Template: Story = () => <Header />;

// Propsの型に該当するデータの注入
export const Default = Template.bind({});
