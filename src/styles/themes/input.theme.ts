import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
	field: {
		borderBottom: "2px solid zinc.700",
		borderColor: "zinc.700",
		fontWeight: "regular",
		color: "zinc.400",
		background: "transparent",
		bgColor: "transparent",
		_hover: {},
		_focus: {
			borderColor: "zinc.800",
		},
	},
	element: {
		color: "zinc.400",
	},
});

const flushed = definePartsStyle({
	field: {
		borderColor: "zinc.800",
	},
});

export const inputTheme = defineMultiStyleConfig({
	baseStyle,
	variants: { flushed },
});
