import { useParams } from 'react-router-dom';
import DogBreed from '../components/dog/dogBreed/DogBreed';
import { Body, Nav } from '../components/layout/Layout';
import { Header } from '../components/typography/Header';

const Detail = () => {
  const { id } = useParams();

  return (
    <Body>
      <Nav />
      <Header title="Dog Breed Details" />
      <DogBreed id={id} />
    </Body>
  );
};

export default Detail;
