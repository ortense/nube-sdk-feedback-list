import { Column, Text } from "@tiendanube/nube-sdk-jsx";
import { Feedback } from "./Feedback";
import type { FeedbackData } from "../types";
import { StyleSheet, theme } from "@tiendanube/nube-sdk-ui";

export type FeedbackListProps = {
	data: FeedbackData[];
};

const styles = StyleSheet.create({
	feedbackList: {
		borderRadius: "1rem",
		backgroundColor: "#FAF9F6",
		padding: "1rem",
		gap: "1rem",
		boxShadow: `2px 2px 6px 0 ${theme.color.accent}`,
		width: "94%",
		margin: "1rem auto",
	},
	heading: {
		paddingBottom: "0.5rem",
		textTransform: "uppercase",
		borderBottom: `1px solid ${theme.color.accent}`,
	},
});

export function FeedbackList({ data }: FeedbackListProps) {
	return (
		<Column style={styles.feedbackList}>
			<Text heading={4} style={styles.heading}>
				O que dizem nossos clientes
			</Text>
			<Column gap="1rem">
				{data.map((fb) => (
					// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
					<Feedback data={fb} />
				))}
			</Column>
		</Column>
	);
}
