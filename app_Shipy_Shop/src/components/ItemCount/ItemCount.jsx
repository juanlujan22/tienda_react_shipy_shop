import { useState } from "react"
import { HStack, Button, Text, Flex } from "@chakra-ui/react";


export function  ItemCount ({stock, incial, onAdd}) {

   const [count, setCount]=useState(incial)
   
   

   const suma= ()=> count < stock && setCount(count+1) 

   const resta=()=> count > incial && setCount(count-1)

   const agregarAlCarrito=()=> onAdd(count)  
   
  return (
    <>
        <HStack >
            <Text> Cantidad:  {count} </Text> 
            <Button onClick={resta}> - </Button>
            <Button onClick={suma}> + </Button>
        </HStack>
        <Button onClick={agregarAlCarrito}> Agregar al Carrito </Button>
        
    </>
  )
}
