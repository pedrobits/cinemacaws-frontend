import { Carousel, Typography, Button } from "@material-tailwind/react";

const HeroCarrosel = () => {
	return (
		<Carousel autoplay={true} loop={true} className="h-[40rem] shadow-lg overflow-hidden">
			<div className="relative h-full w-full">
				<img
					src="https://img.odcdn.com.br/wp-content/uploads/2023/03/unnamed.jpg"
					alt="image 1"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-customDark/60">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl"
						>
							Scott Pilgrim Contra o Mundo
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Comprar Ingresso
							</Button>
							<Button size="lg" color="white" variant="text">
								Saber-mais
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative h-full w-full">
				<img
					src="https://i0.wp.com/1.bp.blogspot.com/-0L17ZW4dnqo/Xa37r9fL2gI/AAAAAAAAdvw/GjW6P3DV7vwWzYPCZ3xlYVcFZlpXrTYKgCLcBGAsYHQ/s1600/chumbo2.jpg?ssl=1"
					alt="image 2"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 grid h-full w-full items-center bg-customDark/60">
					<div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl"
						>
							Chumbo Grosso
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80 p-10"
						>
							O policial Nicholas Angel sente o cheiro de crime quando os moradores de uma pacata vila de Somerset começam a morrer em acidentes aparentemente terríveis.
							Algo está acontecendo, e ele deve trabalhar com o idiota local Danny Butterman para descobrir o quê.
						</Typography>
						<div className="flex gap-2">
							<Button size="lg" color="white">
								Comprar Ingresso
							</Button>
							<Button size="lg" color="white" variant="text">
								Saber-mais
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative h-full w-full">
				<img
					src="https://img.odcdn.com.br/wp-content/uploads/2022/12/Cidade-de-Deus-buscape-serie.jpg"
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
							Cidade de Deus
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80"
						>
							Nas favelas empobrecidas do Rio de Janeiro nos anos 1970,
							dois jovens escolhem caminhos diferentes.
							Buscapé (Phellipe Haagensen) é um fotógrafo iniciante que
							documenta a crescente violência relacionada às drogas em seu bairro.
							José {"Zé"} Pequeno (Douglas Silva) é um traficante ambicioso que usa
							Buscapé e suas fotos como uma forma de aumentar sua fama enquanto uma guerra
							territorial irrompe com seu rival, Mané Galinha (Leandro Firmino da Hora).
							O filme foi rodado em locações nos bairros mais pobres do Rio.
						</Typography>
						<div className="flex gap-2">
							<Button size="lg" color="white">
								Comprar Ingresso
							</Button>
							<Button size="lg" color="white" variant="text">
								Saber-mais
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Carousel>
	);
}

export default HeroCarrosel;