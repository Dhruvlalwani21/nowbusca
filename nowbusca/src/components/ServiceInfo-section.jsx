import React from "react";

function ServiceInfo() {
	return (
		<>
			<div className="glass-effect container p-2 my-8 mx-auto">
				<div className="flex lg:flex-nowrap flex-wrap">
					<div className="text-left w-full md:w-1/2 lg:w-1/2 px-2 text-white ">
						<h3 className="text-3xl my-4">NOW BUSCAS</h3>
						<span className="text-md font-normal py-2 mt-4">
							São mais de 40 Módulos ONLINE para consultar tudo o que
							você precisa sobre Pessoas ou Empresas. Tome decisões
							com maior precisão e rapidez a partir de relatórios com
							dados que importam para o seu negócio.
						</span>
					</div>
					<div className="w-62 h-62 my-5 lg:w-2/5 lg:h-1/2 rounded-lg">
						<img
							className="object-cover"
							src="/nowbusca-services.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiceInfo;
