import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InformationCard from './InformationCard';

export default {
  title: 'Components/InformationCard',
  component: InformationCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InformationCard>;


const Template: ComponentStory<typeof InformationCard> = (args) => <InformationCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Gender:',
  value: 'Male'
}