import React, {useState, useEffect} from 'react';
import DatesOptions from './DatesOptions';
import mapImage from './img/map.svg';
import './style.css';


const CityOptions = ({cities}) => {

  return (
       <>
        <option value="">Vyberte</option>
          {cities.map((city) => <option key={city.code} value={city.code}>{city.name}</option>)}   
        </>       
 
   )
}


const JourneyPicker = ({onJourneyChange}) => {


    const [fromCity, setFromCity] = useState('')
    const [toCity, setToCity] = useState('')
    const [date, setDate] = useState('')
    const [cities, setCities] = useState([])
    const [dates, setDates] = useState([])

    useEffect(() => {
      fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((resp) => resp.json())
      .then((json) => setCities(json.data))
    }, [])
  
    useEffect(() => {
      fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then((resp) => resp.json())
      .then((json) => setDates(json.data))
    }, [])
 

    const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
      .then((resp) => resp.json())
      .then((json) => onJourneyChange(json.data))
      
    }
    
    const onSelectFromCity = (event) => {
      setFromCity(event.target.value)
    }
    const onSelectToCity = (event) => {
      setToCity(event.target.value)
    }

    const onSelectDate = (event) => {
      setDate(event.target.value)
    }


  return (
     <div className="journey-picker container">
     <h2 className="journey-picker__head">Kam chcete jet?</h2>
     <div className="journey-picker__body">
       <form className="journey-picker__form">
         <label>
           <div className="journey-picker__label">Odkud:</div>
           <select value={fromCity} onChange={onSelectFromCity}>
           <CityOptions cities={cities}/>
           </select>
         </label>
         <label>
           <div className="journey-picker__label">Kam:</div>
           <select value={toCity} onChange={onSelectToCity}>
           <CityOptions cities={cities}/>
           </select>
         </label>
         <label>
           <div className="journey-picker__label">Datum:</div>
           <select value={date} onChange={onSelectDate}>
            <DatesOptions dates={dates} /> 
           </select>
         </label>
         <div className="journey-picker__controls">
           <button onClick={handleSubmit}
            className="btn" type="submit"
            disabled={fromCity === '' || toCity === '' || date === ''}
            >Vyhledat spoj</button>
         </div>
       </form>
       <img src={mapImage} />
     </div>
    </div>
  )
}

export default JourneyPicker