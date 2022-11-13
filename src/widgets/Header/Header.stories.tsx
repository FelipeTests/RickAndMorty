import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchContextProvider } from '@/contexts/SearchContext'
import { GendersContextProvider } from '@/contexts/GenderContext'

import Header from './Header';

export default {
  title: 'Widgets/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = () => (
  <SearchContextProvider>
    <GendersContextProvider>
      <Header />
    </GendersContextProvider>
  </SearchContextProvider>
)

export const Default = Template.bind({});