import { Body, Nav } from '../components/layout/Layout';
import LoginForm from '../components/form/login/LoginForm';
import { Header } from '../components/typography/Header';

const Login = () => {
  return (
    <Body>
      <Nav />
      <Header title="Login" />
      <LoginForm />
    </Body>
  );
};

export default Login;
