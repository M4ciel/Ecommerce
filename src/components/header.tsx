import { Center, Flex, Heading, Text } from "@chakra-ui/react";

import styles from "@/styles/css/header.module.css";

export default function HeaderComponent(props: HeadersType.Data) {
	return (
		<Flex className={styles.header}>
			<Heading fontSize={72}>{props.title}</Heading>
			<Text color="zinc.100">{props.text}</Text>
		</Flex>
	);
}
