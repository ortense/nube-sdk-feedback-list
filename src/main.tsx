import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { getFeedbacks } from "./api";
import { FeedbackList } from "./components/FeedbackList";

export async function App(nube: NubeSDK) {
	const feedbacks = await getFeedbacks();
	nube.send("ui:slot:set", () => ({
		ui: {
			slots: {
				after_line_items: <FeedbackList data={feedbacks} />,
			},
		},
	}));
}
