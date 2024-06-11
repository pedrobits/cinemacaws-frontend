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
	classification: PropTypes.oneOf(['livre', 'dez', 'doze', 'quatorze', 'dezesseis', 'dezoito']).isRequired,
	width: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	textSize: PropTypes.string.isRequired,
};

export default Indicacao;

{/* <Indicacao classification="livre" width="100px" height="100px" textSize="24px" />
<Indicacao classification="dez" width="100px" height="100px" textSize="24px" />
<Indicacao classification="doze" width="100px" height="100px" textSize="24px" />
<Indicacao classification="quatorze" width="100px" height="100px" textSize="24px" />
<Indicacao classification="dezesseis" width="100px" height="100px" textSize="24px" />
<Indicacao classification="dezoito" width="100px" height="100px" textSize="24px" /> */}