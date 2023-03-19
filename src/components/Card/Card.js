import styles from './Card.module.scss';
import clxs from "clsx";
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { useState } from 'react';

const Card = props => {

	const [isFavorite, setIsFavorite] = useState(props.isFavorite);

	const dispatch = useDispatch()


	const handleClick = (e) => {
	e.preventDefault();
	dispatch(toggleCardFavorite( props.cardId ));
	 setIsFavorite(current => !current);
 	console.log('isFavorite', isFavorite)
	}

		return (
  		<li className={styles.card}>
				{props.title}
				<button onClick={handleClick} className={clxs(styles.button)}><i className={clxs("fa fa-star-o", styles.icon, isFavorite && styles.isFavorite)}></i></button>
		</li>
  	);
};

export default Card;