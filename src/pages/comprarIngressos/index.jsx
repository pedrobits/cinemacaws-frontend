/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/navBar";
import mockFilmesEmProgramacao from "../../scripts/mockFilmesEmProgramacao";
import SeatSelection from "../../components/SeatComponent";

const ComprarIngresso = () => {
	const [filmesEmProgramacao, setFilmesEmProgramacao] = useState([]);
	const [filmeSelecionado, setFilmeSelecionado] = useState(null);
	const [sessionSelecionada, setSessionSelecionada] = useState(null);
	const [assentosSelecionados, setAssentosSelecionados] = useState([]);

	useEffect(() => {
		const filmes = mockFilmesEmProgramacao();
		setFilmesEmProgramacao(filmes);
		document.title = "Programação - CineMacaws";
	}, []);

	const handleChangeFilme = (event) => {
		const filmeId = event.target.value;
		const filme = filmesEmProgramacao.find((filme) => filme._id.$oid === filmeId);
		setFilmeSelecionado(filme);
		setSessionSelecionada(null);
		setAssentosSelecionados([]);
	};

	const handleChangeSession = (event) => {
		const sessionId = event.target.value;
		const session = filmeSelecionado.sessions.find((sess) => sess._id.$oid === sessionId);
		setSessionSelecionada(session);
		setAssentosSelecionados([]);
	};

	const handleSeatSelection = (selectedSeats) => {
		setAssentosSelecionados(selectedSeats);
	};

	return (
		<>
			<NavBar />
			<div className="flex flex-col justify-center items-center p-10 min-h-[30rem]">
				<h1 className="text-4xl font-bold mb-8">Comprar Ingressos</h1>

				<div className="flex flex-col gap-6 items-start md:flex-row">
					{filmeSelecionado && (
						<div className="relative w-64 h-96">
							<img
								src={filmeSelecionado.poster}
								alt={filmeSelecionado.name}
								className="w-full h-full rounded-lg object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
							/>
							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
								<p className="text-white text-center font-semibold">
									<a href={`/filmes/sobre/${filmeSelecionado._id.$oid}`}>Ver detalhes</a>
								</p>
							</div>
						</div>
					)}
					<div className="flex flex-col flex-grow gap-4">
						<label htmlFor="filmeSelect" className="text-sm font-medium mb-2">
							Escolha um filme:
						</label>
						<select
							name="filme"
							id="filmeSelect"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-customGreen block w-full p-2.5 outline-none"
							onChange={handleChangeFilme}
							value={filmeSelecionado ? filmeSelecionado._id.$oid : ""}
						>
							<option value="">Selecione um filme</option>
							{filmesEmProgramacao.map((filme) => (
								<option key={filme._id.$oid} value={filme._id.$oid}>
									{filme.name}
								</option>
							))}
						</select>

						{filmeSelecionado && (
							<>
								<label htmlFor="sessionSelect" className="text-sm font-medium mt-4 mb-2">
									Selecione uma sessão:
								</label>
								<select
									name="session"
									id="sessionSelect"
									className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-customGreen block w-full p-2.5 outline-none"
									onChange={handleChangeSession}
									value={sessionSelecionada ? sessionSelecionada._id.$oid : ""}
								>
									<option value="">Selecione uma sessão</option>
									{filmeSelecionado.sessions.map((session) => (
										<option key={session._id.$oid} value={session._id.$oid}>
											{session.date} às {session.time}
										</option>
									))}
								</select>
							</>
						)}

						{sessionSelecionada && (
							<div className="h-full p-10 flex items-center justify-center bg-gray-900 text-white rounded-md">
								<SeatSelection
									session={sessionSelecionada}
									onSeatSelect={handleSeatSelection}
									assentosSelecionados={assentosSelecionados}
								/>
							</div>
						)}

						<div className="mt-4">
							<h3 className="text-lg font-bold mb-2">Assentos Selecionados:</h3>
							{assentosSelecionados.length > 0 ? (
								<ul className="divide-y divide-gray-200">
									{assentosSelecionados.map((assento, index) => (
										<li key={assento} className="flex items-center py-2">
											<svg className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
											<span className="text-gray-800">Assento {assento}</span>
											{index !== assentosSelecionados.length - 1 && (
												<svg className="ml-auto h-4 w-4 text-gray-400 cursor-pointer hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
												</svg>
											)}
										</li>
									))}
								</ul>
							) : (
								<p className="text-gray-800">Nenhum assento selecionado ainda.</p>
							)}
						</div>

					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ComprarIngresso;