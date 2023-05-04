import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = definePartsStyle({
	field: {
		fontWeight: "regular",
		color: "zinc.500",
	},
	icon: {
		color: "zinc.500",
	},
});

export const selectTheme = defineMultiStyleConfig({ baseStyle });
