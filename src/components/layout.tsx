import { Center, Flex } from "@chakra-ui/react";
import FooterComponent from "./footer";
import NavbarComponent from "./navbar";

export default function LayoutComponent({ children }: any) {
	return (
		<Flex flexDir="column" h="100vh">
			<NavbarComponent />
			<>{children}</>
			<FooterComponent />
		</Flex>
	);
}
