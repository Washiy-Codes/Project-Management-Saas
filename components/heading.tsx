import { Separator } from "@/components/ui/separator"

type HeadingProps = {
    title:string,
    description:string,
}
const Heading = ({title, description}: HeadingProps)=>{
    return(
        <>
        <div>
          <h1 className="text-lg tracking-tight">{title}</h1>
          <p className="text-small">{description}</p>
        </div>
        <Separator />
        </>
    )
}

export {Heading}