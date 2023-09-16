import {ChakraProvider,
Center,
Text,} from '@chakra-ui/react'

export const Header = () => {
    return(
        <ChakraProvider>
            <Center h={'14'} position={'absolute'} >
           <Text fontSize={'22px'} fontFamily={'sans-serif'} fontWeight={'600'} color={'orange'} paddingLeft={'100px'} paddingTop={'150px'} cursor={'pointer'}>
            Gs2 BANK
            </Text>
            </Center>
        </ChakraProvider>
    );
}


