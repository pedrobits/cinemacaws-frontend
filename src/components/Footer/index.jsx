import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className="bg-customDark text-gray-100 py-10">
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
				<div className="flex flex-col md:w-1/3 gap-5">
					<img className="w-56" src="/public/logo.png" alt="Logo CineMacaws" />
					<p className="mt-2 text-sm text-gray-400">
						CineMacaws é um cinema fictício criado por Pedro e Renato para fins educativos e como uma piada interna.
					</p>
				</div>

				<div className="md:w-1/3">
					<h2 className="text-xl font-bold">Navegação Fácil</h2>
					<ul className="mt-4 space-y-2">
						<li className="hover:text-customGreen transition-all"><a href="/">Inicio</a></li>
						<li className="hover:text-customGreen transition-all"><a href="/club-macaws">Club Macaws</a></li>
						<li className="hover:text-customGreen transition-all"><a href="/programacao">Programação</a></li>
						<li className="hover:text-customGreen transition-all"><a href="/comprar-ingresso">Comprar Ingresso</a></li>
					</ul>
				</div>

				<div className="md:w-1/3">
					<h2 className="text-xl font-bold">Siga-nos nas Redes Sociais</h2>
					<div className="mt-4 flex space-x-4">
						<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-customGreen hover:text-gray-400">
							<FontAwesomeIcon icon={faFacebook} size="2x" />
						</a>
						<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-customGreen hover:text-gray-400">
							<FontAwesomeIcon icon={faInstagram} size="2x" />
						</a>
						<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-customGreen hover:text-gray-400">
							<FontAwesomeIcon icon={faTwitter} size="2x" />
						</a>
						<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-customGreen hover:text-gray-400">
							<FontAwesomeIcon icon={faLinkedin} size="2x" />
						</a>
						<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-customGreen hover:text-gray-400">
							<FontAwesomeIcon icon={faYoutube} size="2x" />
						</a>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
				<span>Assign By Pedro Lima</span>
				<div className="mt-2 space-x-4">
					<a href="/privacy-policy" className="hover:text-customGreen transition-all">Politicas de Privacidade</a>
					<a href="/terms-conditions" className="hover:text-customGreen transition-all">Termos & Condições</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
