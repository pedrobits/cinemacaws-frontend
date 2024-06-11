import CardDefault from "../CardImageAndText";
import cardServices from "../CardImageAndText/cardInfos.js"

const PlanExplain = () => {

	return (
		<>
			<div className="bg-customDark p-10">
				<h1 className="font-bold text-3xl text-white py-5">NOSSOS SERVIÇOS</h1>
				<hr className="h-0.5 bg-custom-hr w-9/12 rounded-3xl" />
				<div className="flex flex-row h-full gap-5 py-10">
					{cardServices.map(card => (
						<CardDefault key={card.title} card={card} />
					))}
				</div>
			</div>
		</>
	)
};

export default PlanExplain;