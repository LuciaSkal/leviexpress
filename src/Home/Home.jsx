import React, {useState} from 'react';
import JourneyPicker from '../JourneyPicker/JourneyPicker';


const Home = () => {
  const [journey, setJourney] = useState(null)

  
  return(
    <>
    <JourneyPicker onJourneyChange={setJourney}/>
    {journey === null ? null : `Nalezeno spojení s id ${journey.journeyId}`}
    </>
  )  
}

export default Home