import LayoutComponent from "@/components/layout";
import {
	Button,
	Center,
	Flex,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";

import styles from "@/styles/css/login.module.css";

import { FaEnvelope, FaGooglePlusG, FaFacebookSquare, FaTwitter } from "react-icons/fa";

export default function Login() {
	return (
		<LayoutComponent>
			<Flex className={styles.login}>
				<Flex className={styles.card} bgColor="zinc.100">
					<Flex className={styles.head} bgColor="fuchsia.700">
						<Heading fontSize={18}>Login</Heading>
						<Flex w="100%" justifyContent="space-between">
							<IconButton
								variant="link"
								icon={<FaTwitter />}
								aria-label={""}
							/>
							<IconButton
								variant="link"
								icon={<FaFacebookSquare />}
								aria-label={""}
							/>
							<IconButton
								variant="link"
								icon={<FaGooglePlusG />}
								aria-label={""}
							/>
						</Flex>
					</Flex>
					<Text color="zinc.400">Ou</Text>
					<form className={styles.form}>
						<InputGroup className={styles.input_group}>
							<InputLeftElement pointerEvents="none">
								<FaEnvelope color="zinc.800" />
							</InputLeftElement>
							<Input
								type="email"
								variant="flushed"
								placeholder="Email"
								required
							/>
						</InputGroup>
						<InputGroup className={styles.input_group}>
							<InputLeftElement pointerEvents="none">
								<FaEnvelope color="zinc.800" />
							</InputLeftElement>
							<Input
								type="password"
								variant="flushed"
								placeholder="Senha"
								required
							/>
						</InputGroup>
						<Button type="submit">Entrar</Button>
					</form>
				</Flex>
			</Flex>
		</LayoutComponent>
	);
}
