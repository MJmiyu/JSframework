import ContactForm from '../components/form/contact/ContactForm';
import { Body, Nav } from '../components/layout/Layout';
import { Header } from '../components/typography/Header';

const Contact = () => {
  return (
    <Body>
      <Nav />
      <Header title="Contact us" />
      <ContactForm />
    </Body>
  );
};

export default Contact;
