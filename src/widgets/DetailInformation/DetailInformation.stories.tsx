import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailInformation from './DetailInformation';

export default {
  title: 'Widgets/DetailInformation',
  component: DetailInformation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DetailInformation>;


const Template: ComponentStory<typeof DetailInformation> = (args) => <DetailInformation {...args} />;

export const Default = Template.bind({});
Default.args = {
  gender: 'Human',
  origin: 'Earth',
  type: 'Unknown'
}