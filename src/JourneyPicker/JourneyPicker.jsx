import React, {useState} from 'react';
import mapImage from './img/map.svg';
import './style.css';

const JourneyPicker = () => {

  
    const [fromCity, setFromCity] = useState('')
    const [toCity, setToCity] = useState('')
    const [date, setDate] = useState('')


    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Odesílám formulář s cestou ${fromCity}, ${toCity}, ${date} `)
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
             <option value="">Vyberte</option>
             <option value="Mesto1">Město 1</option>
             <option value="Mesto2">Město 2</option>
             <option value="Mesto3">Město 3</option>
             <option value="Mesto4">Město 4</option>
           </select>
         </label>
         <label>
           <div className="journey-picker__label">Kam:</div>
           <select value={toCity} onChange={onSelectToCity}>
             <option value="">Vyberte</option>
             <option value="Mesto1">Město 1</option>
             <option value="Mesto2">Město 2</option>
             <option value="Mesto3">Město 3</option>
             <option value="Mesto4">Město 4</option>
           </select>
         </label>
         <label>
           <div className="journey-picker__label">Datum:</div>
           <select value={date} onChange={onSelectDate}>
             <option value="">Vyberte</option>
             <option>20.05.2021</option>
             <option>21.05.2021</option>
             <option>22.05.2021</option>
             <option>23.05.2021</option>
           </select>
         </label>
         <div className="journey-picker__controls">
           <button onClick={handleSubmit}
            className="btn" type="submit">Vyhledat spoj</button>
         </div>
       </form>
       <img src={mapImage} />
     </div>
    </div>
  )
}

export default JourneyPicker