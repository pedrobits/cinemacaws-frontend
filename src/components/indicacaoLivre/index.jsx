import PropTypes from 'prop-types';
import coresClassificacoes from './indicacoes';

const Indicacao = ({ classification, width, height, textSize }) => {
	const { text, color } = coresClassificacoes[classification] || coresClassificacoes.livre;

	return (
		<div className="flex items-center justify-center rounded-xl" style={{ width, height, backgroundColor: color }}>
			<span className="text-white font-bold" style={{ fontSize: textSize }} aria-label={text}>{text}</span>
		</div>
	);
}

Indicacao.propTypes = {
	classification: PropTypes.oneOf(['L', '10', '12', '14', '16', '18']).isRequired,
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	textSize: PropTypes.string.isRequired,
};

export default Indicacao;