import {ChakraProvider,
Button,} from '@chakra-ui/react'


export const Botao = ({submit}:any) => {
    return (
        <ChakraProvider>
           <Button onClick={submit} marginTop={'10px'} colorScheme='orange'>Entrar</Button>

        </ChakraProvider>
    )

}
