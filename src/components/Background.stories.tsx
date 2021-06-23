import React from 'react';
import { Story, Meta } from '@storybook/react';
import particles from '../../particles';
import Background, { BackgroundProps } from './Background';

export default {
  title: 'Atomics/Background',
  component: Background,
} as Meta;

const Template: Story<BackgroundProps> = (args) => <Background {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: { ...particles },
};
