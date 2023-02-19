import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const AnimeInfo = () => {

    const [anime, setAnime] = useState<[]>([])

    let params = useParams()

    const fetchSingleAnime = async () => {
        const response = await fetch(`https://kitsu.io/api/edge/anime/${params.id}`)
        const dataFetch = await response.json()
        setAnime(dataFetch.data)
    }
    
    console.log(anime)
    useEffect(() => {
        fetchSingleAnime()
    }, [])
    

    return (
        <>
            {anime.map((value: any) => <p>{value.attributes.title}</p>
                
            )}
        </>
    
    )
}

export default AnimeInfo