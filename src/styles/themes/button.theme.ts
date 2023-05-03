import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
	fontFamily: "Inter",
	fontWeight: "semibold",
});

const link = defineStyle({
	color: "white",
	bg: "none",
	_hover: {
		textDecor: "underline",
	},
	_active: {
		color: "green.400",
	},
});

export const buttonTheme = defineStyleConfig({ baseStyle, variants: { link } });
