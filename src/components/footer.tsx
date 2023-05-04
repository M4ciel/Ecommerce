import { Link } from "@chakra-ui/next-js";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function FooterComponent() {
	return (
		<Flex justifyContent="center" minW="100%" bgColor="zinc.800">
			<Flex
				justifyContent="space-between"
				minW={1100}
				minH={200}
				alignItems="center"
				color="zinc.100"
			>
				<Flex></Flex>
				<Flex>
					<Text>Copyright &copy; 2023</Text>
					<Link href="/">Ecommerce</Link>
					<Text variant="">Todos os direitos reservados</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
