import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
	fontWeight: "semibold",
	fontStyle: "",
	borderRadius: 50,
	color: "zinc.100",
});

const link = defineStyle({
	color: "zinc.100",
	bg: "none",
	_hover: {
		textDecor: "underline",
	},
	_active: {
		color: "zinc.800",
	},
});

const white = defineStyle({
	bgColor: "white",
});

export const buttonTheme = defineStyleConfig({
	baseStyle,
	variants: { link, white },
});
