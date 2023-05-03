import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
    field: {
        border: "12px solid",
        fontFamily: "Inter",
        fontWeight: "regular",
        color: "zinc.400",
        background: "zinc.700",
        bgColor: "zinc.700",
        _hover: {
            bgColor: "zinc.800",
        },
        _focus: {
            bgColor: "zinc.800",
            borderColor: "zinc.700",
        },
    },
    element: {
        color: "zinc.400",
    },
});

export const inputTheme = defineMultiStyleConfig({
    baseStyle,
});
