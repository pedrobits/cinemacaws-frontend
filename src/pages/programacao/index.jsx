/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CardMovie from "../../components/cardMovie";
import NavBar from "../../components/navBar";
import mockFilmesEmProgramacao from "../../scripts/mockFilmesEmProgramacao";
import Footer from '../../components/Footer';

const ProgramacaoPage = () => {
	const [filmesEmProgramacao, setFilmesEmProgramacao] = useState([]);

	useEffect(() => {
		const filmes = mockFilmesEmProgramacao();
		setFilmesEmProgramacao(filmes);
		document.title = "Programação - CineMacaws";
	}, []);

	return (
		<>
			<NavBar />
			<div className="flex flex-col p-20">
				<h1 className="font-bold text-3xl mb-5">Programação no CineMacaws</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
					{filmesEmProgramacao.map((filme) => (
						<CardMovie 
							key={filme._id.$oid} 
							src={filme.poster} 
							alt={filme.name} 
							title={filme.name} 
							id={filme._id.$oid} 
							classification={filme.rating}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	)
};

export default ProgramacaoPage;