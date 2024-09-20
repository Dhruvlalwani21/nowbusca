import React from "react";
import PlanCard from "../../components/PlanCard";

function PlansSection() {
	return (
		<>
			<section id="plans" className="py-20">
				<div className="m-8 text-center  text-white">
					<h3 className="text-3xl text-white text-center font-bold mb-1">
						Nossos Planos
					</h3>
					<span className="text-md text-center">
						PAINEL MAX BUSCAS
					</span>
				</div>
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Plan Cards */}
					<PlanCard
						title="PLANO MINI"
						queries="50 Consultas Diárias"
						prices={[{ duration: "30 DIAS", price: "R$ 190" }]}
					/>
					<PlanCard
						title="PLANO BÁSICO"
						queries="100 Consultas Diárias"
						prices={[
							{ duration: "7 DIAS", price: "R$ 120" },
							{ duration: "15 DIAS", price: "R$ 190" },
							{ duration: "30 DIAS", price: "R$ 270" },
						]}
					/>
					<PlanCard
						title="PLANO PREMIUM"
						queries="200 Consultas Diárias"
						prices={[
							{ duration: "7 DIAS", price: "R$ 140" },
							{ duration: "15 DIAS", price: "R$ 250" },
							{ duration: "30 DIAS", price: "R$ 320" },
						]}
					/>
				</div>
			</section>
		</>
	);
}

export default PlansSection;
