import HeaderComponent from "@/components/header";
import LayoutComponent from "@/components/layout";
import ProductFilterComponent from "@/components/productFilter";
import { Center, Flex } from "@chakra-ui/react";
import { getServerSideProps } from "../api/categories";

export default function Product(props: any) {
	return (
		<LayoutComponent>
			<HeaderComponent title="Produtos" />
			<Center flexDir="column">
				<Flex flexDir="column" w={1200}>
					<ProductFilterComponent {...props} />
				</Flex>
			</Center>
		</LayoutComponent>
	);
}

export { getServerSideProps };
