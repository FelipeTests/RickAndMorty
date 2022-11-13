import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PaginationControls from './PaginationControls';

export default {
  title: 'Ui/PaginationControls',
  component: PaginationControls,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PaginationControls>;


const Template: ComponentStory<typeof PaginationControls> = (args) => <PaginationControls {...args} />;

export const Default = Template.bind({});
Default.args = {
  page: 1
};