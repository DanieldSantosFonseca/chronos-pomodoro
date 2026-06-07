import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Container } from './components/Conteiner';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

export function App() {
  // Qu
  let numero = 1;

  function handleClick() {
    const span = document.getElementById('numero');

    if (!span) return;

    numero++;
    span.innerText = String(numero);
    console.log(numero, Date.now());
  }

  return (
    <>
      <Footer>
        Número: <span id='numero'>{numero}</span>
      </Footer>
      <button onClick={handleClick}>Aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='task'
              labelText='Task'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
            <DefaultButton icon={<StopCircleIcon />} color='red' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
