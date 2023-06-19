
import Button from 'react-bootstrap/Button';

const Boton = ({ url }) => {
  return (
    <>
      <div>

        <Button className='boton' variant='outline-light' size='lg' >
          Nuestra carta
        </Button><br></br><br></br>

        <Button className='boton' variant='outline-light' size='lg'>
          Reservas
        </Button>

      </div>

    </>
  )
}

export default Boton