import React from 'react';
import { Story, Meta } from '@storybook/react';

import Footer, { FooterProps } from './Footer';

export default {
  title: 'Morecules/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  appName: 'NextX',
  name: 'Riml',
  twitterId: 'Fande4d',
};
