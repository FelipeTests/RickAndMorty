import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailEpisodes from './DetailEpisodes';

export default {
  title: 'Widgets/DetailEpisodes',
  component: DetailEpisodes,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DetailEpisodes>;


const Template: ComponentStory<typeof DetailEpisodes> = (args) => <DetailEpisodes {...args} />;

export const Default = Template.bind({});
Default.args = {
  episodes: [{
    air_date: '23 december 2013',
    episode: 'S102E3',
    id: 1,
    name: 'Episode'
  }] 
}