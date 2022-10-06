import { useEffect, useState } from 'react';
import apiStyles from '../../api/Api.module.css';
import typographyStyles from '../../typography/Typography.module.css';
import { dogApiKey, dogApiUrl } from '../../../constants/api';
import axios from 'axios';
import { Container, Description, Name } from '../Dog';

const DogBreed = ({ id }) => {
  const [dogBreed, setDogBreed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = dogApiUrl + '/' + id;

        const response = await axios.get(url, {
          headers: {
            'x-api-key': dogApiKey,
          },
        });

        if (response.status === 200) {
          setDogBreed(response.data);
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
  }, [id]);

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
      {dogBreed && (
        <Container>
          <Name name={dogBreed.name} />

          {dogBreed.life_span && (
            <Description>
              <span className={typographyStyles.Bold}>Life span:</span>{' '}
              {dogBreed.life_span}
            </Description>
          )}

          {dogBreed.temperament && (
            <Description>
              <span className={typographyStyles.Bold}>Temperament:</span>{' '}
              {dogBreed.temperament}
            </Description>
          )}

          {dogBreed.bred_for && (
            <Description>
              <span className={typographyStyles.Bold}>Bred for:</span>{' '}
              {dogBreed.bred_for}
            </Description>
          )}

          {dogBreed.breed_group && (
            <Description>
              <span className={typographyStyles.Bold}>Breed group:</span>{' '}
              {dogBreed.breed_group}
            </Description>
          )}

          <img
            alt="Dog"
            src={`https://cdn2.thedogapi.com/images/${dogBreed.reference_image_id}.jpg`}
          />
        </Container>
      )}
    </>
  );
};

export default DogBreed;
