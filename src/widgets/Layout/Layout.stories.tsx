import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchContextProvider } from '@/contexts/SearchContext';
import { GendersContextProvider } from '@/contexts/GenderContext';

import Layout from './Layout';

export default {
  title: 'Widgets/Layout',
  component: Layout,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Layout>;


const Template: ComponentStory<typeof Layout> = (args) => (
  <SearchContextProvider>
    <GendersContextProvider>
      <Layout {...args} />
    </GendersContextProvider>
  </SearchContextProvider>
)

export const Default = Template.bind({});
Default.args = {
  children: <div style={{ height: '60vh', color: '#FFFFFF' }}>Children</div>
}