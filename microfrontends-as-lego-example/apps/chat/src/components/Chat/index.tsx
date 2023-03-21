import React, { useState } from 'react';
import {
    Box,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    VStack,
    HStack,
    Text,
} from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';

interface Message {
    text: string;
    sender: 'me' | 'bot';
}

const responses = [
    'I\'m not sure what you mean.',
    'Could you clarify that?',
    'Interesting, tell me more.',
    'I\'ll have to think about that one.',
    'Thanks for sharing.',
];

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: 'Hello! How can I help you today?' },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (!inputValue) return;

        const newMessages = [...messages, { sender: 'me', text: inputValue }];
        setMessages(newMessages as any);

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const botMessage = { sender: 'bot', text: randomResponse };
        setTimeout(() => {
            setMessages([...newMessages, botMessage]);
        }, 1000);

        setInputValue('');
    };

    return (
        <VStack justifyContent={"space-between"} spacing={4} align="stretch" p={4} borderRadius="lg">
            <Box flex="1" overflowY="hidden">
                {messages.map((message, index) => (
                    <HStack key={index} justifyContent={message.sender === 'me' ? 'flex-end' : 'flex-start'}>
                        <Box
                            bg={message.sender === 'me' ? 'blue.400' : 'gray.700'}
                            color={message.sender === 'me' ? 'white' : 'gray.200'}
                            py={2}
                            px={4}
                            borderRadius="lg"
                            boxShadow="md"
                            maxWidth="80%"
                            mt={2}
                            textAlign={message.sender === 'me' ? 'right' : 'left'}
                        >
                            <Text fontSize="sm" fontWeight="bold" mb={1}>{message.sender === 'me' ? 'You' : 'Bot'}</Text>
                            <Text fontSize="md">{message.text}</Text>
                        </Box>
                    </HStack>
                ))}
            </Box>
            <InputGroup>
                <Input
                    placeholder="Type your message here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    bg="gray.700"
                    color="white"
                    borderRadius="lg"
                    _focus={{ boxShadow: 'none' }}
                />
                <InputRightElement>
                    <IconButton
                        icon={<FaPaperPlane />}
                        aria-label="Send message"
                        onClick={handleSendMessage}
                        variant="ghost"
                        colorScheme="blue"
                        borderRadius="lg"
                        _hover={{ bg: 'blue.500', color: 'white' }}
                        _active={{ bg: 'blue.600', color: 'white' }}
                    />
                </InputRightElement>
            </InputGroup>
        </VStack>
    );
};

export default Chat;
