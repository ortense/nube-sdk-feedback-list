import { StyleSheet, theme } from "@tiendanube/nube-sdk-ui";
import { Column, Row, Text } from "@tiendanube/nube-sdk-jsx";
import { Avatar } from "./Avatar";
import type { FeedbackData } from "../types";
import { StarRating } from "./StarRating";

export type FeedbackProps = {
	data: FeedbackData;
};

const styles = StyleSheet.create({
	username: {
		margin: "0",
		padding: "0",
		fontWeight: "bold",
	},
	message: {
		margin: "0",
		padding: "0",
	},
	firstRow: {
		justifyContent: "space-between",
		gap: "0.5em",
	},
	feedback: {
		padding: "0.5rem",
		margin: 0,
	},
});

export function Feedback({ data }: FeedbackProps) {
	return (
		<Row id="feedback" style={styles.feedback}>
			<Avatar url={data.avatar} name={data.name} />
			<Column gap="0.5em">
				<Row style={styles.firstRow}>
					<Text style={styles.username}>{data.name}</Text>
					<StarRating value={data.rating} />
				</Row>
				<Text style={styles.message}>{data.comment}</Text>
			</Column>
		</Row>
	);
}
