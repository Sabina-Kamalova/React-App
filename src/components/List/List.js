import styles from "./List.module.scss";
import Column from "../Column/Column";
import { useSelector } from "react-redux";
import ColumnForm from "../ColumnForm/ColumnForm";
import { getListById } from "../../redux/listsRedux";
import { getColumnsByList } from "../../redux/columnsRedux";
import { useParams } from 'react-router';
import SearchForm from "../SearchForm/SearchForm";
import { Navigate } from "react-router";

const List = () => {
  const { listId } = useParams();
  //const columns = useSelector((state) => state.columns);
  const columns = useSelector((state) => getColumnsByList(state, listId));
  const listData = useSelector((state) => getListById(state, listId));
  
  if(!listData) return <Navigate to="/" />
  
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}
        </h2>
      </header>
      <p className={styles.description}>
        {listData.description}
      </p>
      <SearchForm />
      <div className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </div>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
