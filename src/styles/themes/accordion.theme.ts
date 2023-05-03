import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
	createMultiStyleConfigHelpers,
	defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
	root: defineStyle({
		border: "1px solid",
		borderColor: "zinc.800",
		borderRadius: 10,
		overflow: "hidden",
	}),
	button: defineStyle({
		bgColor: "zinc.700",
		color: "zinc.400",

		_hover: {
			bgColor: "zinc.700",
		},
	}),
	panel: defineStyle({
		color: "zinc.100",
	}),
	icon: defineStyle({
		color: "zinc.400",
	}),
});

export const accordionTheme = defineMultiStyleConfig({
	baseStyle,
});
