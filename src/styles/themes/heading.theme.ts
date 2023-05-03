import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
	color: "zinc.100",
	fontSize: "3xl",
	fontWeight: 700,
});

export const headingTheme = defineStyleConfig({
	baseStyle,
});
