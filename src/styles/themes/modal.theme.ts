import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
	dialog: defineStyle({
		bgColor: "background",
		color: "zinc.100",
	}),
});

export const modalTheme = defineMultiStyleConfig({
	baseStyle,
});
