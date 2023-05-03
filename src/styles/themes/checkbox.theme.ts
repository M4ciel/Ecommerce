import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
    label: {
        fontFamily: "Inter",
        fontWeight: "regular",
        color: "zinc.400",
    },
    control: {
        padding: 2,
        borderRadius: 4,
        borderColor: "zinc.700",
    },
});

export const checkboxTheme = defineMultiStyleConfig({
    baseStyle,
    defaultProps: { colorScheme: "green" },
});
