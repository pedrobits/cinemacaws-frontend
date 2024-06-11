import PropTypes from 'prop-types';

import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";

const CardDefault = ({ card }) => {
	return (
		<Card key={card.title} className="p-10 w-[20rem] h-[32rem] flex-shrink-0">
			<CardHeader color="blue-gray" className="relative h-full">
				<img
					src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
					alt={card.title}
				/>
			</CardHeader>
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
