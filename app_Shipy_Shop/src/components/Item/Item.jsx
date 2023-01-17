import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, Flex } from '@chakra-ui/react'
import { ItemCount } from '../ItemCount/ItemCount';

const Item = ({image, titulo, precio, categoria}) => {
    return (
      <>
        <Card  maxW="sm"  boxShadow='2xl' backgroundColor="#F0ECCF" m="5">
          <CardBody>
            <Flex backgroundColor="white" alignItems="center" justifyContent= "center"  borderRadius="lg">  
              <Image
                src= {image}
                borderRadius="lg"
                h="30vh"
              />
            </Flex>
            <Stack mt="6" spacing="3">
              <Heading size="md">{titulo}</Heading>
              <Text>
                {categoria}
              </Text>
              <Text color="blue.600" fontSize="2xl">
               $ {precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Comprar Ahora
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Agregar al Carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </>
    );
}
export default Item