import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  

  const cards = useSelector(getFavoriteCards);

    if (cards.length === 0)
    return (
      <div>
        <PageTitle>No favorites cards</PageTitle>
      </div>
    );

    return (
        <div>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map((card) => (
            <Card key={card.id} title={card.title} isFavorite={card.isFavorite}/>
            ))}
          </ul>
          </article>
      </div>
    )
}

export default Favorite;