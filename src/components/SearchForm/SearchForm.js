import TextInput from "../TextInput/TextInput";
import styles from "./SearchForm.module.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateSearch, getSearchString } from "../../redux/store";

const SearchForm = () => {
  const searchString = useSelector(getSearchString);
  const [search, setSearch] = useState(searchString);
   
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearch( search ));
    setSearch('')
  };
  

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
