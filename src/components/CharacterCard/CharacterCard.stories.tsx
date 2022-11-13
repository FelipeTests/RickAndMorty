import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CharacterCard from './CharacterCard';

export default {
  title: 'Components/CharacterCard',
  component: CharacterCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CharacterCard>;


const Template: ComponentStory<typeof CharacterCard> = (args) => <CharacterCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  species: 'Human',
  name: 'Rick Sanchez',
  lastLocation: 'Test',
  firstSeen: 'Test'
}