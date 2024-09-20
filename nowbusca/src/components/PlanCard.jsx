import React from "react";

const PlanCard = ({ title, queries, prices }) => {
	return (
		<div className="glass-effect shadow-lg mx-3 flex flex-col justify-between rounded-lg p-6">
			<div>
				<span className="text-white rounded-lg bg-opacity-10 bg-white w-fit my-3 py-1 px-2 ">
					{title}
				</span>
				<p className="text-gray-300 my-3 mb-4">{queries}</p>
			</div>

			<div className="text-center">
				<div className="space-y-4">
					{prices.map((price, index) => (
						<div
							key={index}
							className="flex justify-between items-center">
							<span className="text-gray-200">{price.duration}</span>
							<span className="text-white text-lg font-medium">
								{price.price}
							</span>
						</div>
					))}
				</div>
			</div>
			<button className="mt-6 w-full  text-white px-6 py-2 rounded bg-[var(--primary)]">
				Escolher Plano
			</button>
		</div>
	);
};

export default PlanCard;
