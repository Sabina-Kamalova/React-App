import styles from './Card.module.scss';
import clxs from "clsx";
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
//import { useState } from 'react';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {

	const dispatch = useDispatch()

	const addToFavorite = (e) => {
	e.preventDefault();
	dispatch(toggleCardFavorite( props.cardId ));
	}

	const deleteCard = (e) => {
		e.preventDefault();
		dispatch(removeCard( props.cardId ));
	}

		return (
  		<li className={styles.card}>
			{props.title}
			<div className={styles.container}>
				<button onClick={addToFavorite} className={clxs(styles.button)}><i className={clxs("fa fa-star-o", styles.icon, props.isFavorite && styles.isFavorite)}></i></button>
				<button onClick={deleteCard} className={clxs(styles.button)}><i className={clxs("fa fa-trash", styles.icon)}></i></button>
			</div>
		</li>
  	);
};

export default Card;