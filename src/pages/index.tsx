import HeaderComponent from "@/components/header";
import SectionComponent from "@/components/section";
import { Center, Flex, Heading } from "@chakra-ui/react";
import ProductCardComponent from "@/components/productCard";
import BannerCardComponent from "@/components/bannerCard";
import LayoutComponent from "@/components/layout";

export default function Home() {
	return (
		<LayoutComponent>
			<Center flexDir="column">
				<HeaderComponent
					title="Ecommerce"
					text="Free global delivery for all products. Use coupon 25summer for an extra 25% Off"
				/>
				<Flex flexDir="column" w={1200}>
					<SectionComponent>
						<Heading color="zinc.800">Latest Offers</Heading>
						<Flex
							justifyContent="space-between"
							w="100%"
							flexWrap="wrap"
						>
							<ProductCardComponent />
							<ProductCardComponent />
							<ProductCardComponent />
						</Flex>
					</SectionComponent>
					<SectionComponent>
						<Heading color="zinc.800">News in fashion</Heading>
						<Flex
							justifyContent="space-between"
							w="100%"
							flexWrap="wrap"
						>
							<BannerCardComponent />
							<BannerCardComponent />
							<BannerCardComponent />
						</Flex>
					</SectionComponent>
				</Flex>
			</Center>
		</LayoutComponent>
	);
}
