import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Seat from '../Seat/Seat';
import './style.css';



const SeatPicker = ({seats,journeyId}) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null)
  
 const handleSelectSeat = (number) => {
    setSelectedSeatNumber(number)
  }
  

  let history = useHistory();
  const handleBuy = () => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/reserve?seat=${selectedSeatNumber}&journeyId=${journeyId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        seat: `${selectedSeatNumber}`,
        journeyId: `${journeyId}`,
    })
   }).then((response) => response.json())
     .then((json) =>
     history.push(`/reservation/${json.data.reservationId}`));
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
    <button className="btn" type="button" disabled={!selectedSeatNumber}
      onClick={handleBuy}
    >Rezervovat</button>
  </div>
  )
}

export default SeatPicker


