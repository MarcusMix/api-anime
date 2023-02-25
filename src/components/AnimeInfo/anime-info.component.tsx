import { useEffect, useState } from "react"
import ReactLoading from "react-loading"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../Button/button.component"
import { ContainerInfo, Description, Wrapper, WrapperImage } from "./anime-info.styles"
import { AiFillHome } from 'react-icons/ai'


const AnimeInfo = () => {

    const navigate = useNavigate()

    const [anime, setAnime] = useState<any>([])

    const [loading, setLoading] = useState<boolean>(true)

    let params = useParams()
    
    useEffect(() => {
        const fetchSingleAnime = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://kitsu.io/api/edge/anime/${params.id}`)
                const responseJSON = await response.json()
                setAnime(responseJSON.data.attributes)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchSingleAnime()
    }, [])

    const handleBackPage = () => {
        navigate('/')
    }

    return (
        <>
            {loading ? 
            (
            <ContainerInfo>
                <ReactLoading type='bubbles' color='black' width={260}/>
            </ContainerInfo>
            ) : (
            <Wrapper>
                <WrapperImage>
                    <img src={anime.coverImage?.small} alt={anime.slug} />
                </WrapperImage>
                <ContainerInfo>
                    <h2>{anime.canonicalTitle}</h2>
                    <p>{anime.status}</p>
                </ContainerInfo>
                <Description>
                    <h4>{anime.description}</h4>
                    <p>Classificação: {anime.ageRatingGuide}</p>
                </Description>
                <Button onClick={handleBackPage}> <AiFillHome/> Voltar</Button>
            </Wrapper>
            )}
        </>
    )   
}

export default AnimeInfo