import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Widgets/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;


const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});