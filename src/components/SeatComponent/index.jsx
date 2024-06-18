/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const SeatSelection = ({ session, onSeatSelect, assentosSelecionados }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    setSelectedSeats(assentosSelecionados);
  }, [assentosSelecionados]);

  const handleSeatClick = (seatId) => {
    setSelectedSeats(prevSelectedSeats => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter(id => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });

    onSeatSelect(prevSelectedSeats => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter(id => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const isSeatSelected = (seatId) => {
    return selectedSeats.includes(seatId);
  };

  return (
    <div className="flex flex-col items-center justify-around h-full gap-5">
      <span className='itaic text-xs'>Sala {session.Sala}</span>
      <h1 className="text-2xl font-bold mb-4">Selecione seus Assentos</h1>

      {/* Grade de seleção de assentos */}
      <div className="grid grid-cols-3 gap-4">
        {session.seats.map((seat) => (
          <div
            key={seat.id}
            className={`w-12 h-12 flex items-center justify-center cursor-pointer rounded-full
              ${seat.available ? 'bg-green-500' : 'bg-red-500'}
              ${isSeatSelected(seat.id) ? 'bg-customGreenDark animate-pulse' : ''}
              ${!seat.available ? 'cursor-not-allowed' : ''}
            `}
            onClick={() => seat.available && handleSeatClick(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-700">Disponível</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-700">Indisponível</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-customGreenDark"></div>
          <span className="text-sm text-gray-700">Selecionado</span>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
