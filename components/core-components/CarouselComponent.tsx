"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import CardComponent from "./CardComponent"

function CarouselComponent({items}) {
  console.log("items",items)
  return (
    <Carousel>
        <CarouselContent>
            {items.map((item,index)=> {
                return <CarouselItem key={index}>
                  <CardComponent 
                    title={item.title} 
                    description={item.description}
                    imageTop={item.imageTop}
                    image={item.image}
                  />
                </CarouselItem>
            })}
            {/* <CarouselItem>{items[0].value}</CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}

export default CarouselComponent