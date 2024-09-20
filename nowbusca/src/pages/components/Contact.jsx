import React from "react";

const Contact = () => {
	return (
		<div className="py-5 bg-[var(--bgcolor)]">
			<section className="max-w-4xl mx-auto py-5 px-4">
				<h2 className="text-4xl text-white font-bold text-center mb-5">
					Contato
				</h2>
				<form className=" p-8 rounded-lg shadow-lg space-y-6">
					<div>
						<label className="block text-gray-200 font-bold mb-2">
							Nome
						</label>
						<input
							type="text"
							className="w-full p-4 border border-gray-300 rounded-lg"
							placeholder="Seu Nome"
						/>
					</div>
					<div>
						<label className="block text-gray-200 font-bold mb-2">
							E-mail
						</label>
						<input
							type="email"
							className="w-full p-4 border border-gray-300 rounded-lg"
							placeholder="seuemail@exemplo.com"
						/>
					</div>
					<div>
						<label className="block text-gray-200 font-bold mb-2">
							Mensagem
						</label>
						<textarea
							rows="4"
							className="w-full p-4 border border-gray-300 rounded-lg"
							placeholder="Sua mensagem"></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded hover:bg-blue-500">
						Enviar Mensagem
					</button>
				</form>
			</section>
		</div>
	);
};

export default Contact;
