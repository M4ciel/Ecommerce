import { Center, Container, Flex, Heading } from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";

export default function NavbarComponent() {
	return (
		<Flex justifyContent="center" minW="100%" bgColor="zinc.800">
			<Flex
				justifyContent="space-between"
				minW={1200}
				alignItems="center"
				color="zinc.100"
			>
				<Flex>
					<Center>
						<Image
							src="/next.svg"
							width={100}
							height={100}
							alt="Next JS"
						/>
						<Heading>Ecommerce</Heading>
					</Center>
				</Flex>
				<Flex>
					<Center>
						<Link variant="menuVariant" href="/">
							Home
						</Link>
						<Link variant="menuVariant" href="/about">
							Sobre
						</Link>
						<Link variant="menuVariant" href="/products">
							Produtos
						</Link>
						<Link variant="menuVariant" href="/contact">
							Contato
						</Link>
					</Center>
				</Flex>
				<Flex>
					<Center>
						<Link variant="menuVariant" href="/login">
							Login
						</Link>
						<Link variant="menuVariant" href="/register">
							Cadastrar
						</Link>
					</Center>
				</Flex>
			</Flex>
		</Flex>
	);
}
