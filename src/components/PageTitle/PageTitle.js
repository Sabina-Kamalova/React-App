import styles from './PageTitle.module.scss';

const PageTitle = props => {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{props.children}</h1>
      </div>
    );
  };

  export default PageTitle;