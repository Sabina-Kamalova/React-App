import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  

  const cards = useSelector(getFavoriteCards)

    return (
        <div>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map((card) => (
            <Card title={card.title} />
            ))}
          </ul>
          </article>
      </div>
    )
}

export default Favorite;