import React from 'react';



const DatesOptions = ({dates}) => {

  return (
       <>
        <option value="">Vyberte</option>
        {dates.map((date) => <option key={date.dateBasic}>{date.dateBasic}</option>)} 
       </>
 
   )
}

export default DatesOptions