/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Indicacao from '../indicacaoLivre';

const CardMovie = ({ src, alt, title, id, classification }) => {
	return (
		<Link to={`/filmes/sobre/${id}`} className="h-full flex flex-col gap-5 p-5 shadow-lg">
			<img
				src={src}
				alt={alt}
				className="h-auto max-w-full rounded-lg max-h-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
			/>
			<div className="flex flex-col h-full items-start gap-2 justify-around">
				<span className="text-xl font-bold">{title}</span>
				<Indicacao
					classification={classification}
					width="40px"
					height="40px"
					textSize="16px"
				/>
			</div>
		</Link>
	)
}

export default CardMovie;


