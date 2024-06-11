const NavBar = () => {
	const navItem = "font-medium text-lg text-customGreen transition-all text-center hover:text-customGreenDark hover:scale-105 hover:animate-pulse";

	return (
		<>
			<div className="flex items-center p-10 gap-10 justify-center flex-col w-screen z-50 bg-customDark shadow-2xl md:flex-row md:justify-around">
				<img className="w-56" src="/public/logo.png" alt="Logo CineMacaws" />
				<div>
					<ul className="flex items-center w-full gap-5 justify-center md:gap-10 md:justify-around">
						<li className={navItem}><a href="#" className="nav-link">Club Macaws</a></li>
						<li className={navItem}><a href="#" className="nav-link">Em breve</a></li>
						<li className={navItem}><a href="#" className="nav-link">Programação</a></li>
						<li className={navItem}><a href="#" className="nav-link">Comprar Ingresso</a></li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default NavBar;
