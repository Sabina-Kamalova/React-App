import styles from './Card.module.scss';
import clxs from "clsx";
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import { useState } from 'react';
import { useEffect } from 'react';

const Card = props => {

	const [isFavorite, setIsFavorite] = useState(false);

	const dispatch = useDispatch()

	const handleClick = (e) => {
	e.preventDefault();
	dispatch(toggleCardFavorite({ cardId: props.cardId }));
	 setIsFavorite(current => !current);
 console.log('isFavorite', isFavorite)
	}

	 useEffect( () => {
    console.log(isFavorite);
}, [isFavorite]);

		return (
  		<li className={styles.card}>
				{props.title}
				<button onClick={handleClick} className={clxs(styles.button, isFavorite && styles.isFavorite)}><i className={clxs("fa fa-star-o", styles.icon)}></i></button>
		</li>
  	);
};

export default Card;