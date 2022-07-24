import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {

  const clients = [
    {
      lastName:'Doe',
      firstName:'John',
      gender:'male',
      height: 178,
      birth: "1992-07-14",
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: "1988-05-11",
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]

  return (
    <div>
      <IdCard client = {clients[0]}/>
      <IdCard client = {clients[1]}/>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;
