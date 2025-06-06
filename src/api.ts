import type { FeedbackData } from "./types";

export async function getFeedbacks(): Promise<FeedbackData[]> {
	return Promise.resolve([
		{
			id: "1",
			name: "Alice",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
			comment: "Ótima experiência! Voltarei a comprar.",
			rating: 5,
		},
		{
			id: "2",
			name: "Bruna",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bruna",
			comment: "Atendimento excelente e entrega rápida.",
			rating: 4,
		},
		{
			id: "3",
			name: "Carla",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carla",
			comment: "Achei o produto um pouco caro.",
			rating: 3,
		},
		{
			id: "4",
			name: "Diana",
			avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana",
			comment:
				"Uma longa descrição para testar o layout e ver como o texto se comporta. Uma longa descrição para testar o layout e ver como o texto se comporta. Uma longa descrição para testar o layout e ver como o texto se comporta.",
			rating: 2,
		},
	]);
}
