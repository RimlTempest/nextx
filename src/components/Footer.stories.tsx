import React from 'react';
import { Story, Meta } from '@storybook/react';
import Footer from './Footer';
import { FooterProps } from '../types/props/FooterProps';

export default {
  title: 'Morecules/Footer',
  component: Footer,
} as Meta;

// Propsのテストパターン
const Template: Story<FooterProps> = (args) => <Footer {...args} />;

// Propsの型に該当するデータの注入
export const Default = Template.bind({});
Default.args = {
  appName: 'NextX',
  name: 'Riml',
  twitterId: 'Fande4d',
};
