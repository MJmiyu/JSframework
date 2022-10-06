import styles from './Dog.module.css';

export const Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

export const Name = ({ name }) => {
  return <div className={styles.Name}>{name}</div>;
};

export const Description = ({ children }) => {
  return <div className={styles.Description}>{children}</div>;
};
