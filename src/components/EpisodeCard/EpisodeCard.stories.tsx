import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EpisodeCard from './EpisodeCard';

export default {
  title: 'Components/EpisodeCard',
  component: EpisodeCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EpisodeCard>;


const Template: ComponentStory<typeof EpisodeCard> = (args) => <EpisodeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Gender:',
  value: 'Male'
}