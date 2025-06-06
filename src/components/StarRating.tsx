import { StyleSheet } from "@tiendanube/nube-sdk-ui";
import { Text } from "@tiendanube/nube-sdk-jsx";

export function getStarRating(value: number): string {
	const max = 5;
	const full = "★";
	const empty = "☆";

	return full.repeat(value) + empty.repeat(max - value);
}

const styles = StyleSheet.create({
	stars: {
		color: "#efd213",
		textWeight: "bold",
		margin: "0",
		padding: "0",
	},
});

export function StarRating({ value }: { value: number }) {
	return <Text style={styles.stars}>{getStarRating(value)}</Text>;
}
