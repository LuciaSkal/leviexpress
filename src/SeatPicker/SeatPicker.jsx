import React, {useState} from 'react';
import Seat from '../Seat/Seat';
import './style.css';



const SeatPicker = ({seats,journeyId}) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null)
  
  console.log(journeyId)

  const handleSelectSeat = (number) => {
    setSelectedSeatNumber(number)
   
  }

  return (
  <div className="seat-picker container">
    <h2>Vyberte sedadlo</h2>
     <div className="seats">
       
     <div className="seat-row">
       {seats[0].map((row) => <Seat  number={row.number}
            isOccupied={row.isOccupied}
            key={row.number}
            isSelected={selectedSeatNumber === row.number}
            onSelect={handleSelectSeat} />)}
       </div>

       <div className="seat-row">
       {seats[1].map((row) => <Seat  number={row.number}
            isOccupied={row.isOccupied}
            key={row.number}
            isSelected={selectedSeatNumber === row.number}
            onSelect={handleSelectSeat} />)}
       </div>

       <div className="seat-row">
       {seats[2].map((row) => <Seat  number={row.number}
            isOccupied={row.isOccupied}
            key={row.number}
            isSelected={selectedSeatNumber === row.number}
            onSelect={handleSelectSeat} />)}
       </div>
       
       <div className="seat-row">
       {seats[3].map((row) => <Seat  number={row.number}
            isOccupied={row.isOccupied}
            key={row.number}
            isSelected={selectedSeatNumber === row.number}
            onSelect={handleSelectSeat} />)}
       </div>

       <div className="seat-row">
       {seats[4].map((row) => <Seat  number={row.number}
            isOccupied={row.isOccupied}
            key={row.number}
            isSelected={selectedSeatNumber === row.number}
            onSelect={handleSelectSeat} />)}
       </div>
    
    
     </div>
    <button className="btn" type="button">Rezervovat</button>
  </div>
  )
}

export default SeatPicker


