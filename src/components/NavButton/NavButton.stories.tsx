import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavButton from './NavButton';

export default {
  title: 'Components/NavButton',
  component: NavButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavButton>;


const Template: ComponentStory<typeof NavButton> = (args) => <NavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'All',
  isActive: false
}

export const Active = Template.bind({});
Active.args = {
  children: 'All',
  isActive: true
}