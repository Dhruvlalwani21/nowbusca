import React from "react";
import PlansSection from "./components/Plans-section";
import ServiceInfo from "../components/ServiceInfo-section";
import About from "./components/About";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Landing() {
	return (
		<div>
			<div className="min-h-screen">
				<NavBar />
				{/* Hero Section */}
				<section className=" text-white py-20 text-center">
					<h2 className="text-4xl ">
						Encontre o melhor plano para suas buscas!
					</h2>
					<p className="text-lg mt-4">
						Escolha o plano que mais combina com suas necessidades.
					</p>
				</section>
				<hr className="glass-effect" />

				<ServiceInfo />
				{/* Plans Section */}
				<PlansSection />
				<About />
				<Footer />
			</div>
		</div>
	);
}

export default Landing;
