import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from './Search';

export default {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Search>;


const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});