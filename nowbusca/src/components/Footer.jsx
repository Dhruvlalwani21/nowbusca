import React from "react";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<footer className="bg-black text-white px-2 pt-6 border-t-2">
			<div className=" container mx-auto">
				<div className="flex justify-between items-center">
					<h3 className="text-3xl py-4">NOW BUSCAS</h3>
					<div className="flex">
						<Link to={"https://www.instagram.com/nowbusca/"}>
							<img width={30} src="/svg/instagram.svg" alt="" />
						</Link>
					</div>
				</div>
				<h3 className=" py-5 text-xl">Useful Links</h3>
				<div className="flex py-2 underline gap-4">
					<Link to={"/contact"}>
						<span>Contact us</span>
					</Link>
					<Link to={"/about"}>
						<span>About us</span>
					</Link>
					<Link to={"/affiliate"}>
						<span>Join Affiliate</span>
					</Link>
				</div>
			</div>
			<div className="text-white">
				<p className="text-center py-4">
					&copy; 2024 Now Consultoria. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
