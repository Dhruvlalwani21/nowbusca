import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<header className=" text-white p-4">
				<nav className="flex justify-between items-center max-w-7xl mx-auto">
					<Link to={'/'}><h1 className="">Now Consultoria</h1></Link>
					<ul className="flex space-x-4">
						<li>
							<a href="#plans" className="hover:text-gray-300">
								Planos
							</a>
						</li>
						<li>
							<a href="#about" className="hover:text-gray-300">
								Sobre Nós
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-gray-300">
								Contato
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default NavBar;
