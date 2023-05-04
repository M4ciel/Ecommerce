import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Heading,
	Select,
} from "@chakra-ui/react";

export default function ProductFilterComponent({ categories }: any) {
	return (
		<Flex flexDir="column">
			<Flex>
				<Heading>Filtrar</Heading>
			</Flex>
			<Select placeholder="Selecionar Categoria">
				{categories.map((category: any) => {
					return (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					);
				})}
			</Select>
			<Accordion>
				<AccordionItem>
					<AccordionButton>
						<Box as="span" flex="1" textAlign="left">
							Filtro 1
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}></AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Filtro 2
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Flex>
	);
}
