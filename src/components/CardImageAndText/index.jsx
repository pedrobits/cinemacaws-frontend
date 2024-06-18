import PropTypes from 'prop-types';

import {
	Card,
	CardBody,
	Typography,
} from "@material-tailwind/react";

const CardDefault = ({ card }) => {
	return (
		<Card key={card.title} className="flex items-start p-10 w-[20rem] h-[25rem]">
			<CardBody>
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{card.title}
				</Typography>
				<Typography>
					{card.text}
				</Typography>
			</CardBody>
		</Card>
	);
}

// Defina as propTypes para o componente
CardDefault.propTypes = {
	card: PropTypes.shape({
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired,
};

export default CardDefault;
