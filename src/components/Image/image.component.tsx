//styles
import { ImageStyled } from "./image.styles"

//interface
import ImageProps from "../../interface/image.types"

const Image = ({ src, alt }: ImageProps) => {
    return (
        <ImageStyled src={src} alt={alt} />
    )
}

export default Image