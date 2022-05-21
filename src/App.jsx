// import Container from '@mui/material/Container';
// import { fontSize } from '@mui/system'
import { Container, Grid, Typography } from '@mui/material'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import { NoticiasProvider } from './context/NoticiasProvider'


function App() {
  
  return (
    <NoticiasProvider>

      <Container>
        <header>
        {/* sx={{
            fontWeight: 'bold',
            fontSize: '30px'
          }} */}
          <Typography align='center' marginY={5}
          component='h1' variant='h3'>
            Buscador de Noticias
          </Typography>
        </header>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={12} md={6} >
            <Formulario/>
          </Grid>
        </Grid>

        <ListadoNoticias />

        
      </Container>

    </NoticiasProvider>
  )
}

export default App
