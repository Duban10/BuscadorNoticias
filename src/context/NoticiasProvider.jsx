import axios from "axios";
import { useState, useEffect, createContext } from "react";


const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {


    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
      const consultarApi = async () => {
          // const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&pageSize=100&apikey=${import.meta.env.VITE_API_KEY}`
          const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`

          const {data} = await axios(url)

          // console.log(data.articles)
          // console.log(data)
          setNoticias(data.articles)
          setTotalNoticias(data.totalResults)
          setPagina(1)

      }
      consultarApi()
    }, [categoria])

    useEffect(() => {
        const consultarApi = async () => {
            // const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&pageSize=100&apikey=${import.meta.env.VITE_API_KEY}`
            const url = `https://newsapi.org/v2/top-headlines?country=co&page=${pagina}&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`
  
            const {data} = await axios(url)
  
            // console.log(data.articles)
            // console.log(data)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
  
  
        }
        consultarApi()
      }, [pagina])
    

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    // valor -> para que vaya tomando el valor corrido por la flecha de la paginacion
    const handleChangePagina = (e, valor) => {
       // console.log(e.target.textContent)
        //console.log(valor)
        setPagina(valor)
    }



    return(
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export { NoticiasProvider}

export default NoticiasContext


