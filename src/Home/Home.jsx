import React, {useState} from 'react';
import JourneyDetail from '../JourneyDetail/JourneyDetail';
import JourneyPicker from '../JourneyPicker/JourneyPicker';


const Home = () => {
  const [journey, setJourney] = useState(null)

  
  return(
    <>
    <JourneyPicker onJourneyChange={setJourney}/>
    {journey === null ? null : <JourneyDetail journey={journey} />}
    
    </>
  )  
}

export default Home