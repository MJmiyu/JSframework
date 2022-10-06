import styles from './Typography.module.css';

export const Header = ({ title }) => {
  return <h1 className={styles.Header}>{title}</h1>;
};
