import styles from "./List.module.scss";
import Column from "../Column/Column";
import { useSelector } from "react-redux";
import ColumnForm from "../ColumnForm/ColumnForm";
import CardForm from "../CardForm/CardForm";

const List = () => {
  const columns = useSelector((state) => state.columns);
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <div className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </div>
      <ColumnForm />
    </div>
  );
};

export default List;
