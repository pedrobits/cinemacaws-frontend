import CardDefault from "../CardImageAndText";

const PlanExplain = () => {
	const cardServices = [
		{
			title: "Exibição de filmes exclusivos",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]

	return (
		<>
			<div className="bg-customDark p-10">
				<h1 className="font-bold text-3xl text-white py-5">NOSSOS SERVIÇOS</h1>
				<hr className="h-0.5 bg-custom-hr w-3/5" />
				{cardServices.map(card => (
					<CardDefault key={card.title} card={card} />
				))}
			</div>
		</>
	)
};

export default PlanExplain;