import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GendersContextProvider } from '@/contexts/GenderContext';

import Nav from './Nav';

export default {
  title: 'Widgets/Nav',
  component: Nav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Nav>;


const Template: ComponentStory<typeof Nav> = () => <GendersContextProvider><Nav /></GendersContextProvider>;

export const Default = Template.bind({});