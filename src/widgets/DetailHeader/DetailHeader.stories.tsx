import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailHeader from './DetailHeader';

export default {
  title: 'Widgets/DetailHeader',
  component: DetailHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DetailHeader>;


const Template: ComponentStory<typeof DetailHeader> = (args) => <DetailHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'Alive',
  name: 'Rick Sanchez',
  species: 'Human'
}