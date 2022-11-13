import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailedDataDisplay from './DetailedDataDisplay';

export default {
  title: 'Ui/DetailedDataDisplay',
  component: DetailedDataDisplay,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DetailedDataDisplay>;


const Template: ComponentStory<typeof DetailedDataDisplay> = (args) => <DetailedDataDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  children: 'Data',
  footer: 'Date'
};