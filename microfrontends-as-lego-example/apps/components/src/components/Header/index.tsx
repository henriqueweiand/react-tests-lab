import { Box, Flex } from "@chakra-ui/react";
import { Provider } from "@/components/Provider";

export const Header = () => {
  return (
    <Provider>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="gray.900"
        color="white"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" w="100%">
          <Box>
            <h1>My App</h1>
          </Box>
        </Box>
      </Flex>
    </Provider>
  );
}
