import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <TextInput placeholder="Add new column" />
            <Button text="Search" />
            <Button text="Create" />
        </form>
    );
  };


  export default SearchForm;