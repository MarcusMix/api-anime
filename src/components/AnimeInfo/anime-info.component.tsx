import { useEffect, useState } from "react"
import ReactLoading from "react-loading"
import { useParams } from "react-router-dom"
import { ContainerInfo, Description } from "./anime-info.styles"


const AnimeInfo = () => {

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
    
    console.log(anime)
    

    
  

    return (
        <div>
            {loading ? 
            (
            <ContainerInfo>
                <ReactLoading type='bubbles' color='black' width={260}/>
            </ContainerInfo>
            ) : (
            <>
                <img src={anime.coverImage?.small} alt={anime.slug} />
                <ContainerInfo>
                    <h2>{anime.canonicalTitle}</h2>
                    <p>{anime.status}</p>
                </ContainerInfo>
                <Description>
                    <h4>{anime.description}</h4>
                    <p>Classificação: {anime.ageRatingGuide}</p>
                </Description>
            </>
            )}
        </div>
    )   
}

export default AnimeInfo