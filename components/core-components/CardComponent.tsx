import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"

function CardComponent(props:any) {
    let {title, description,imageTop,image} = props
  return (
    <Card>
        {imageTop && 
            <div className="w-20  h-20 ">
                <Image alt="img" src={image} className="w-full h-full rounded-full object-cover shadow-md p-1" />
            </div>
        }
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
  )
}

export default CardComponent