import { useEffect, useState } from 'react';
import { dogApiKey, dogApiUrl } from '../../../constants/api';
import styles from './DogBreeds.module.css';
import apiStyles from '../../api/Api.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Name, Description } from '../Dog';

const DogBreeds = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dogApiUrl, {
          headers: {
            'x-api-key': dogApiKey,
          },
        });

        if (response.status === 200) {
          setDogBreeds(response.data);
        } else {
          setError('An error occured');
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className={apiStyles.Loading}>One moment while loading</div>;
  }

  if (error) {
    return (
      <div className={apiStyles.LoadingFailed}>
        I am sorry an error has occured
      </div>
    );
  }

  return (
    <>
      {dogBreeds.map((dogBreed, idx) => (
        <Container key={idx}>
          <Link className={styles.Link} to={`detail/${dogBreed.id}`}>
            Details
          </Link>

          <Name name={dogBreed.name} />

          <Description>{dogBreed.temperament}</Description>
        </Container>
      ))}
    </>
  );
};

export default DogBreeds;
