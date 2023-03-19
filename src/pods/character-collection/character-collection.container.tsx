import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { HotelCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateHotel = () => {
    navigate(linkRoutes.createHotel);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: string) => {
    loadCharacterCollection();
  };

  return (
    <HotelCollectionComponent
      characterCollection={characterCollection}
      onCreateHotel={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
