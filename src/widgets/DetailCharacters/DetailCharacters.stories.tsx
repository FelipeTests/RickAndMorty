import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailEpisodes from './DetailCharacters';

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
  characters: [{
    created: '123',
    episode: ['123'],
    gender: 'Male',
    id: 1,
    image: '/images/sample-avatar.png',
    location: {
      name: '123',
      url: '123'
    },
    name: 'Rick Sanchez',
    origin: {
      name: 'Earth',
      url: '123'
    },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: '123'
  }],
  setSelectedCharacter: () => {}
}