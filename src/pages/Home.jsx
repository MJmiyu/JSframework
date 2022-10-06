import DogBreeds from '../components/dog/dogBreeds/DogBreeds';
import { Body, Nav } from '../components/layout/Layout';
import { Header } from '../components/typography/Header';

const Home = () => {
  return (
    <Body>
      <Nav />
      <Header title="Dog Breeds" />
      <DogBreeds />
    </Body>
  );
};

export default Home;
