//hooks
import { useState, useEffect } from 'react'

//components
import Input from './components/Input/input.component'
import Card from './components/Card/card.component'
import Container from './components/Container/container.component'
import Image from './components/Image/image.component'
import Header from './components/Header/header.component'

//icons
import { BiCameraMovie } from 'react-icons/bi'
import { MdFormatListNumbered, MdOutlineGrade } from 'react-icons/md'
import { VscDebugStart } from 'react-icons/vsc'
import { BsFillCalendarCheckFill } from 'react-icons/bs'

//styles
import './App.css'
import { LinkAnime } from './pages/AnimeDetails/AnimeDetails.styles'

//loading
import ReactLoading from 'react-loading';

//image 
import background from './assets/anime-background.jpg'

//api url
const api = "https://kitsu.io/api/edge/"

function App() {

  const [text, setText] = useState<string>('naruto')

  const [info, setInfo] = useState<any>({})

  useEffect(() => {
    setInfo({})
    fetchAnimes()   
  }, [text])
  

  const fetchAnimes = async ()  => {
    const response = await fetch(`${api}anime?filter[text]=${text}&page[limit]=16`)
    const dataAnimes = await response.json()
    setInfo(dataAnimes)
    console.log(dataAnimes)
  }


  return (
    <div className="App">
      <Header>
      <img className='back' src={background} alt="background" />
      <h1>Animes</h1>
      </Header>

      <Container>
      <Input 
        value={text} 
        onChange={(search) => setText(search)} 
        placeholder="Nome do anime..." 
      />
      </Container>
      {info.data ? (
        <Container>
          {info.data.map((anime: any) => {
            return (  
              <LinkAnime to={'/anime/' + anime.id}>
              <Card 
              key={anime.id}
              layout
              animate={{opacity: 1}} 
              initial={{opacity: 0}} 
              exit={{opacity: 0}}
              >
              <Image 
                src={anime.attributes.posterImage.small} 
                alt={anime.attributes.canonicalTitle} 
                />
              <p><strong>{anime.attributes.canonicalTitle}</strong></p>
              <p> <BiCameraMovie/> Episódios: {anime.attributes.episodeCount}</p>
              <p> <MdFormatListNumbered/> Tamanho: {anime.attributes.episodeLength} min.</p>
              <p> <MdOutlineGrade/> Nota: {anime.attributes.averageRating}</p>
              <p> <VscDebugStart/> Início: {anime.attributes.startDate}</p>
              <p> <BsFillCalendarCheckFill/> Fim: {anime.attributes.endDate}</p>

            </Card>
          </LinkAnime>
            )
          })}
        </Container>
      ) : (
        <Container>
          {text && !info.data && <ReactLoading type='bubbles' color='black' width={260}/>}
        </Container>
      )}  
    </div>
  )
}

export default App
