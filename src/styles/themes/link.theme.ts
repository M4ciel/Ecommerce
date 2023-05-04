import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
	textColor: "zinc.100",
	padding: "0 5px",
	_hover: {
		textDecoration: "none",
	},
});

const menuVariant = defineStyle({
	textDecoration: "none",
	padding: "5px 15px",
	transition: "0.4s",
	borderBottom: "2px solid transparent",
	_hover: {
		textDecoration: "none",
		borderColor: "zinc.100",
	},
});

export const linkTheme = defineStyleConfig({
	baseStyle,
	variants: {
		menuVariant,
	},
});
