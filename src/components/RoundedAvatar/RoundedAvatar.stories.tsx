import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundedAvatar from './RoundedAvatar';

export default {
  title: 'Components/RoundedAvatar',
  component: RoundedAvatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RoundedAvatar>;


const Template: ComponentStory<typeof RoundedAvatar> = (args) => <RoundedAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: '/images/sample-avatar.png'
}