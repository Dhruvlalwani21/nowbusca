import React from "react";

const About = () => {
	return (
		<div className="py-4 bg-[var(--bgcolor)]">
			<section className="max-w-4xl mx-auto  px-4 text-center">
				<h2 className="text-4xl text-white font-bold mb-6">
					Sobre Nós
				</h2>
				<p className="text-lg text-gray-200 leading-relaxed">
					Now Consultoria é uma plataforma desenvolvida para fornecer
					consultas rápidas e confiáveis. Nossa missão é oferecer um
					serviço de qualidade para que nossos clientes possam
					realizar suas pesquisas com facilidade e segurança. Com
					nossos planos flexíveis, você pode escolher o que melhor se
					adapta às suas necessidades e aumentar sua produtividade.
				</p>
				<p className="text-lg text-gray-400 leading-relaxed mt-6">
					Fundada em 2023, nossa equipe está comprometida em entregar
					a melhor experiência possível aos nossos clientes. Nossos
					servidores são rápidos e seguros, e nosso suporte está
					sempre disponível para ajudá-lo a aproveitar ao máximo os
					nossos serviços.
				</p>
			</section>
		</div>
	);
};

export default About;
