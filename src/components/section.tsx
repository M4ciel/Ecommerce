import { Flex } from "@chakra-ui/react";

export default function SectionComponent({ children }: any) {
	return (
		<Flex flexDir="column" margin="5em 0">
			{children}
		</Flex>
	);
}
