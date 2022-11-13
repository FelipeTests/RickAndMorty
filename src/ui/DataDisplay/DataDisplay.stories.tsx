import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DataDisplay from './DataDisplay';

export default {
  title: 'Ui/DataDisplay',
  component: DataDisplay,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DataDisplay>;


const Template: ComponentStory<typeof DataDisplay> = (args) => <DataDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  children: 'Data'
};