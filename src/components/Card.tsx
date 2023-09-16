import {ChakraProvider, Center, Box, Button, Input, Text,} from'@chakra-ui/react'
import { Botao } from './Botao';

interface Usuario {
    email: string;
    senha: number;
}


export const Usuarios = ({email , senha}:Usuario) => {
    return (
        <ChakraProvider>
            <Center bg={'#06021efe'} marginTop={'2px'} height={'100vh'}>
            <Center marginTop={'10px'}  h={'300px'}>
        <Box bg={'#0d0d43db'} w={'550px'} h={'270px'} display={'flex'} flexDirection={'column'} borderRadius={'15px'}>
          <Center>
            <Text marginBottom={'10px'} fontSize={'18px'} color={'orange'} paddingTop={'10px'} >
              Realize seu login:
            </Text>
          </Center>
          <Center display={'flex'} flexDirection={'column'}>
            <Text paddingBottom={'4px'} color={'gray.500'}>
                Exemplo de Email: {email}
            </Text>
          <Input type='url' w={'350px'} border={'2px solid white'} placeholder="Email">
          </Input>
            <Text paddingTop={'6px'} color={'gray.500'}>
                Exemplo de Senha: {senha}
            </Text >
          <Input type="password" w={'350px'} border={'2px solid white'} placeholder="Senha" marginTop={'10px'}>
            </Input>
            <Botao />
          </Center>
        </Box>
      </Center>

            </Center>

        </ChakraProvider>
    );
}




