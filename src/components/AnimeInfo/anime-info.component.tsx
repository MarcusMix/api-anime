import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


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
    

    {loading && <div>loading...</div>}
  

    return (

            <>
                <img src={anime.coverImage?.tiny} alt="" />
                <div>
                    <h1>{anime.canonicalTitle}</h1>
                    <h3>{anime.description}</h3>
                    <p>Status: {anime.status}</p>
                </div>
            </>
    )   
}

export default AnimeInfo