import { Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia.jsx'


const ListadoNoticias = () => {
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    //   console.log(noticias)
     // console.log(totalNoticias)

//  Math.ceil() redondea hacia arriba ej. 2.1 redondea 3
      const totalPaginas = Math.ceil(totalNoticias / 20)



  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Últimas noticias
        </Typography>
        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>
        <Stack spacing={2} direction={'row'} justifyContent='center' alignItems='center'
                sx={{
                    marginY: 5
                }}
        >            
            <Pagination count={totalPaginas} color="primary" onChange={handleChangePagina} page={pagina} />            
        </Stack>

    </>
  )
}

export default ListadoNoticias