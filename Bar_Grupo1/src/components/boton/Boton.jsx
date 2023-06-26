
import Button from 'react-bootstrap/Button';
import TragosContainer from '../tragos/TragosContainer';
import { Link } from 'react-router-dom';

const Boton = () => {
  return (
    <>
      <div>
        
        <Button className='boton' variant='outline-light' >
          Nuestra carta
        </Button>
        <br></br><br></br>

        <Button className='boton' variant='outline-light'>
          Reservas
        </Button>

      </div>

    </>
  )
}

export default Boton