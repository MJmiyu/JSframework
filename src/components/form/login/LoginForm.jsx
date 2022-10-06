import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import formStyles from '../Form.module.css';
import styles from './LoginForm.module.css';
import axios from 'axios';
import { strapiLoginUrl } from '../../../constants/api';
import { Navigate } from 'react-router';

const schema = yup.object().shape({
  identifier: yup.string().required('Enter a username'),
  password: yup.string().required('Enter password'),
});

const LoginForm = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(async (data) => {
    try {
      const response = await axios.post(strapiLoginUrl, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setUserInfo(response.data);
      } else {
        setLoginFailed(true);
      }
    } catch (e) {
      console.error(e);
      setLoginFailed(true);
    }
  }, []);

  return (
    <>
      {loginFailed && (
        <div className={styles.Error}>Wrong username or password</div>
      )}

      {userInfo && <Navigate to="/admin" />}

      <form className={formStyles.Form} onSubmit={handleSubmit(onSubmit)}>
        {errors.identifier && <span>{errors.identifier.message}</span>}
        <input placeholder="Username" {...register('identifier')} />

        {errors.password && <span>{errors.password.message}</span>}
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
