import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { amber } from "./colors/amber.color";
import { blue } from "./colors/blue.color";
import { cyan } from "./colors/cyan.color";
import { emerald } from "./colors/emerald.color";
import { fuchsia } from "./colors/fuchsia.color";
import { gray } from "./colors/gray.color";
import { green } from "./colors/green.color";
import { indigo } from "./colors/indigo.color";
import { lime } from "./colors/lime.color";
import { neutral } from "./colors/neutral.color";
import { orange } from "./colors/orange.color";
import { pink } from "./colors/pink.color";
import { purple } from "./colors/purple.color";
import { red } from "./colors/red.color";
import { rose } from "./colors/rose.color";
import { sky } from "./colors/sky.color";
import { slate } from "./colors/slate.color";
import { stone } from "./colors/stone.color";
import { teal } from "./colors/teal.color";
import { violet } from "./colors/violet.color";
import { yellow } from "./colors/yellow.color";
import { zinc } from "./colors/zinc.color";
import { buttonTheme } from "./themes/button.theme";
import { checkboxTheme } from "./themes/checkbox.theme";
import { inputTheme } from "./themes/input.theme";
import { radioTheme } from "./themes/radio.theme";
import { selectTheme } from "./themes/select.theme";
import { switchTheme } from "./themes/switch.theme";
import { accordionTheme } from "./themes/accordion.theme";
import { modalTheme } from "./themes/modal.theme";
import { headingTheme } from "./themes/heading.theme";
import { linkTheme } from "./themes/link.theme";

const customTheme = extendTheme(
	{
		fonts: {
			body: "Inter, sans-serif",
		},
		fontWeights: {
			hairline: 100,
			thin: 200,
			light: 300,
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
		},
		colors: {
			white: "#ffffff",
			black: "#000000",
			background: "#2C2B2A",
			slate: slate,
			gray: gray,
			zinc: zinc,
			neutral: neutral,
			stone: stone,
			red: red,
			orange: orange,
			amber: amber,
			yellow: yellow,
			lime: lime,
			green: green,
			emerald: emerald,
			teal: teal,
			cyan: cyan,
			sky: sky,
			blue: blue,
			indigo: indigo,
			violet: violet,
			purple: purple,
			fuchsia: fuchsia,
			pink: pink,
			rose: rose,
		},
		components: {
			Accordion: accordionTheme,
			Button: buttonTheme,
			Checkbox: checkboxTheme,
			Heading: headingTheme,
			Input: inputTheme,
			Link: linkTheme,
			Modal: modalTheme,
			Radio: radioTheme,
			Select: selectTheme,
			Switch: switchTheme,
		},
	},
	withDefaultColorScheme({
		colorScheme: "fuchsia",
		components: ["Button"],
	})
);

export default customTheme;
