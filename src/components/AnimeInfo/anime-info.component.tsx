//hooks
import { useEffect, useState } from "react"

//router
import { useNavigate, useParams } from "react-router-dom"

//components
import Button from "../Button/button.component"
import ReactLoading from "react-loading"

//styles
import { ContainerInfo, Description, Wrapper, WrapperImage } from "./anime-info.styles"

//react icons
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
                console.log(anime)
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
                    <p>Episódios: {anime.episodeCount}</p>
                    <p>Rank de Popularidade: {anime.popularityRank}</p>
                    <img src={anime.coverImage?.original} alt={anime.slug} />
                </Description>
                <Button onClick={handleBackPage}> <AiFillHome/> Voltar</Button>
            </Wrapper>
            )}
        </>
    )   
}

export default AnimeInfo