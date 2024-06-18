import { Carousel, Typography, Button } from "@material-tailwind/react";
import mockFilmesEmProgramacao from "../../scripts/mockFilmesEmProgramacao.js"
import { useEffect, useState } from "react";

const HeroCarrosel = () => {
	const [filmesEmCartaz, setFilmesEmCartaz] = useState([]);
	useEffect(
		() => {
			const filmesEmCartaz = mockFilmesEmProgramacao();
			setFilmesEmCartaz(filmesEmCartaz)
		},
		[]
	)
	return (
		<Carousel autoplay={true} loop={true} className="h-[40rem] shadow-lg overflow-hidden">
			{filmesEmCartaz.map((filme) => {
				return (
					<div key={filme._id.$oid} className="relative h-full w-full">
						<img
							src={filme.image}
							alt="image 3"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 grid h-full w-full items-end bg-customDark/60">
							<div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
								<Typography
									variant="h1"
									color="white"
									className="mb-4 text-3xl md:text-4xl lg:text-5xl"
								>
									{filme.name}
								</Typography>
								<Typography
									variant="lead"
									color="white"
									className="mb-12 opacity-80"
								>
									{filme.summary}
								</Typography>
								<div className="flex gap-2">
									<Button size="lg" color="white">
										Comprar Ingresso
									</Button>
									<Button size="lg" color="white" variant="text">
										<a href={`/filmes/sobre/${filme._id.$oid}`}>Saber-mais</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</Carousel>
	);
}

export default HeroCarrosel;