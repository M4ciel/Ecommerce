import { Image, Link } from "@chakra-ui/next-js";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function ProductCardComponent() {
	return (
		<Flex
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			w={400}
			gap={5}
			margin="5em 0"
			p={5}
		>
			<Image
				loading="eager"
				src="/images/gucci.jpg"
				width={350}
				height={350}
				alt={"Gucci"}
				boxShadow="0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
				borderRadius={5}
			/>
			<Heading color="zinc.800">Gucci</Heading>
			<Text flexWrap="wrap" textAlign="center">
				The structured shoulders and sleek detailing ensure a sharp
				silhouette. Team it with a silk pocket square and leather
				loafers.
			</Text>
			<Flex justifyContent="space-between" w="100%">
				<Text>R$ 129,00</Text>
				<Button as={Link} href={`/products/${1}`}>
					Ver Mais
				</Button>
			</Flex>
		</Flex>
	);
}
