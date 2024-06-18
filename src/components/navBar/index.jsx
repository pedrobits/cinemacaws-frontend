const NavBar = () => {
	const navItem = "font-medium text-lg text-customGreen transition-all text-center hover:text-customGreenDark hover:scale-105 hover:animate-pulse";

	return (
		<>
			<div className="flex flex-col items-center justify-center p-10 gap-10 w-full z-50 bg-customDark shadow-2xl md:flex-row md:justify-around">
				<a href="/">
					<img className="w-56" src="/public/logo.png" alt="Logo CineMacaws" />
				</a>
				<div>
					<ul className="flex flex-col items-center w-full gap-5 justify-center md:gap-10 md:justify-around md:flex-row">
						<li className={navItem}><a href="#" className="nav-link">Club Macaws</a></li>
						<li className={navItem}><a href="#" className="nav-link">Em breve</a></li>
						<li className={navItem}><a href="/programacao" className="nav-link">Programação</a></li>
						<button
							className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-customGreen rounded-lg h-[60px] hover:bg-customGreenDark transition-all"
							onClick={() => {
								window.location.href = '/comprar-ingressos';
							}}
						>
							Comprar Ingressos
						</button>

					</ul>
				</div>
			</div>
		</>
	)
}

export default NavBar;
