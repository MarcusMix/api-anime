//hooks
import { useState, useEffect } from 'react'

//components
import Input from './components/Input/input.component'
import Card from './components/Card/card.component'
import Container from './components/Container/container.component'
import Image from './components/Image/image.component'

//styles
import './App.css'

//loading
import ReactLoading from 'react-loading';

//image 
import background from './assets/anime-background.jpg'

const api = "https://kitsu.io/api/edge/"


function App() {


  const [text, setText] = useState<string>('')

  const [info, setInfo] = useState<any>({})

  useEffect(() => {
    setInfo({})
    fetchAnimes()   
  }, [text])

  const fetchAnimes = async ()  => {
    const response = await fetch(`${api}anime?filter[text]=${text}&page[limit]=16`)
    const dataAnimes = await response.json()
    setInfo(dataAnimes)
  }


  return (
    <div className="App">

      
      <div className='container'>
      <img className='back' src={background} alt="" />
        <h1>Animes</h1>
      </div>



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
              <p>{anime.attributes.canonicalTitle}</p>
            </Card>
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
