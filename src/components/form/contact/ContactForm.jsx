import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import formStyles from '../Form.module.css';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Must be more than 3 characters')
    .required('Enter your first name here'),
  lastName: yup
    .string()
    .min(4, 'Must be more than 4 characters')
    .required('Enter your last name here'),
  email: yup
    .string()
    .required('Enter an email address')
    .email('Enter a valid email address'),
  subject: yup
    .mixed()
    .oneOf(['yes', 'no', 'maybe'], 'You need to choose an option')
    .defined(),
  message: yup
    .string()
    .required('Enter your message')
    .min(10, 'Needs to be 10 characters or more'),
});

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((data) => {
    setSubmitted(true);
    console.log(data);
  }, []);

  return (
    <>
      {submitted && <div>Submitted successfully</div>}

      <form className={formStyles.Form} onSubmit={handleSubmit(onSubmit)}>
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <input placeholder="First name" {...register('firstName')} />

        {errors.lastName && <span>{errors.lastName.message}</span>}
        <input placeholder="Last name" {...register('lastName')} />

        {errors.email && <span>{errors.email.message}</span>}
        <input placeholder="Email address" {...register('email')} />

        {errors.subject && <span>{errors.subject.message}</span>}
        <select defaultValue="default" {...register('subject')}>
          <option disabled value="default">
            Choose an option
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="maybe">Maybe</option>
        </select>

        {errors.message && <span>{errors.message.message}</span>}
        <input placeholder="Enter a message here" {...register('message')} />

        <button>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
