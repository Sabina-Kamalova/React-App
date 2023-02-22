import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <TextInput placeholder="Add new column" />
            <Button>
                <span className="fa fa-search" />
            </Button>
            <Button>Create</Button>
        </form>
    );
  };


  export default SearchForm;