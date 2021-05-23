import React, {useState} from 'react';
import JourneyDetail from '../JourneyDetail/JourneyDetail';
import JourneyPicker from '../JourneyPicker/JourneyPicker';
import SeatPicker from '../SeatPicker/SeatPicker';


const Home = () => {
  const [journey, setJourney] = useState(null)

  
  return(
    <>
    <JourneyPicker onJourneyChange={setJourney}/>
    {journey === null ? null : <JourneyDetail journey={journey} />}
   
    {journey === null ? null : <SeatPicker seats={journey.seats}  journeyId={journey.journeyId} /> }
    
    </>
  )  
}

export default Home