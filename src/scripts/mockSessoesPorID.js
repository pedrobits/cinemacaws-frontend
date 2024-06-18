const mockSessoesPorFilme = (id) => {
	const arraySessions = [
		{
			id: "6670336e4fbfd210a2997e53",
			sessions: [
				{
					data: "2024-06-17",
					horario: "19:00",
					sala: "Sala 1"
				},
				{
					data: "2024-06-18",
					horario: "21:00",
					sala: "Sala 2"
				}
			]
		},
		{
			id: "667033b54fbfd210a2997e55",
			sessions: [
				{
					data: "2024-06-17",
					horario: "20:00",
					sala: "Sala 3"
				},
				{
					data: "2024-06-19",
					horario: "18:00",
					sala: "Sala 4"
				}
			]
		},
		{
			id: "667033d64fbfd210a2997e57",
			sessions: [
				{
					data: "2024-06-18",
					horario: "17:00",
					sala: "Sala 1"
				},
				{
					data: "2024-06-20",
					horario: "19:00",
					sala: "Sala 3"
				}
			]
		},
		{
			id: "667034154fbfd210a2997e59",
			sessions: [
				{
					data: "2024-06-18",
					horario: "21:00",
					sala: "Sala 2"
				},
				{
					data: "2024-06-21",
					horario: "20:00",
					sala: "Sala 4"
				}
			]
		},
		{
			id: "6670342a4fbfd210a2997e5b",
			sessions: [
				{
					data: "2024-06-19",
					horario: "16:00",
					sala: "Sala 1"
				},
				{
					data: "2024-06-22",
					horario: "18:00",
					sala: "Sala 3"
				}
			]
		},
		{
			id: "6670344e4fbfd210a2997e5d",
			sessions: [
				{
					data: "2024-06-20",
					horario: "14:00",
					sala: "Sala 2"
				},
				{
					data: "2024-06-23",
					horario: "17:00",
					sala: "Sala 4"
				}
			]
		}
	];


	const movie = arraySessions.find(movie => movie.id === id);
	return movie ? movie.sessions : [];
};

export default mockSessoesPorFilme;