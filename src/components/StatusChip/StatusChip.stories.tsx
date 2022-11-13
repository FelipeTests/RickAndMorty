import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StatusChip from './StatusChip';

export default {
  title: 'Components/StatusChip',
  component: StatusChip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StatusChip>;


const Template: ComponentStory<typeof StatusChip> = (args) => <StatusChip {...args} />;

export const Alive = Template.bind({});
Alive.args = {
  color: 'green',
  label: 'test'
}

export const Dead = Template.bind({});
Dead.args = {
  color: 'red',
  label: 'test'
}

