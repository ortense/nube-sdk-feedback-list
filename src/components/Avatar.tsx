import { StyleSheet, theme } from "@tiendanube/nube-sdk-ui";
import { Image } from "@tiendanube/nube-sdk-jsx";

export type AvatarProps = {
	url: string;
	name: string;
};

const styles = StyleSheet.create({
	avatar: {
		borderRadius: "50%",
		backgroundColor: theme.color.accent,
		width: 64,
		height: 64,
		marginRight: "1rem",
	},
});

export function Avatar({ url, name }: AvatarProps) {
	return <Image style={styles.avatar} src={url} alt={`Avatar de ${name}`} />;
}
