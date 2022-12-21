import React, { useEffect, useState } from 'react';
import './index.css';

export const App = () => {

  const elevatorButtons = [
    {row: 1, column1: 1, column2: 2}, 
    {row: 2, column1: 3, column2: 4}, 
    {row: 3, column1: 5, column2: 6}, 
    {row: 4, column1: 7, column2: 8}, 
    {row: 5, column1: 9, column2: 10}];

  const floors = [
    {id: 1, floor: 10}, 
    {id: 2, floor: 9}, 
    {id: 3, floor: 8}, 
    {id: 4, floor: 7}, 
    {id: 5, floor: 6}, 
    {id: 6, floor: 5}, 
    {id: 7, floor: 4}, 
    {id: 8, floor: 3}, 
    {id: 9, floor: 2}, 
    {id: 10, floor: 1} 
  ];

  const moving1 = []; const moving2 = []; const moving3 = [];
  const initialState = [
    {id: 1, floor: "...", status: "Elevator is standing still"},
    {id: 2, floor: "...", status: "Elevator is standing still"},
    {id: 3, floor: "...", status: "Elevator is standing still"} 
  ];

  const [elevators, setStatus] = useState(initialState);
  const [movingElevator1, setGoing1] = useState(moving1);
  const [movingElevator2, setGoing2] = useState(moving2);
  const [movingElevator3, setGoing3] = useState(moving3);

  useEffect(() => {
    const interval = setInterval(() => {
      //fetch("https://tenfloorshotell.herokuapp.com/api/elevator_status")
      fetch("https://hotellapp.fly.dev/api/elevators_status")
      .then(response => response.json())
      .then(data => {
        setStatus(current =>
          current.map(obj => {
            if (data.elevatorStatus[3] === "Elevator is running") {setGoing1([])};
            if (data.elevatorStatus[4] === "Elevator is running") {setGoing2([])};
            if (data.elevatorStatus[5] === "Elevator is running") {setGoing3([])};
            if (obj.id === 1) {return {...obj, floor: data.elevatorStatus[0], status: data.elevatorStatus[3]};}
            if (obj.id === 2) {return {...obj, floor: data.elevatorStatus[1], status: data.elevatorStatus[4]};}
            if (obj.id === 3) {return {...obj, floor: data.elevatorStatus[2], status: data.elevatorStatus[5]};}
            return obj; 
          }));
      })
      .catch(err => console.error(err));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function handleClick(floor) {
    //await fetch(`https://tenfloorshotell.herokuapp.com/api/call_elevator_to/${floor}`)
    await fetch(`https://hotellapp.fly.dev/api/call_elevator_to/${floor}`)
    .then(res => res.json())
    .then(data => {
      if (data === 1) {setGoing1(data)};
      if (data === 2) {setGoing2(data)};
      if (data === 3) {setGoing3(data)};
    })
    .catch(err => console.error(err));
  };


  function renderSquare1(floor) {
    if (elevators[0].status === "Elevator is standing still" && movingElevator1 === 1 && floor.floor === elevators[0].floor) {return <span className="button squarebuttongo"></span>;}
    else if (elevators[0].status === "Elevator is standing still" && movingElevator1 !== 1 && floor.floor === elevators[0].floor) {return <span className="button squarebuttonstill"></span>;}
    else if ((elevators[0].status === "Elevator is running" && floor.floor === elevators[0].floor)) {return <span className="button squarebuttongoing"></span>;}
    else {return (<span className="button squarebutton"></span>)}
  }

  function renderSquare2(floor) {
    if (elevators[1].status === "Elevator is standing still" && movingElevator2 === 2 && floor.floor === elevators[1].floor) {return <span className="button squarebuttongo"></span>;}
    else if (elevators[1].status === "Elevator is standing still" && movingElevator2 !== 2 && floor.floor === elevators[1].floor) {return <span className="button squarebuttonstill"></span>;}
    else if (elevators[1].status === "Elevator is running" && floor.floor === elevators[1].floor) {return <span className="button squarebuttongoing"></span>;}
    else {return (<span className="button squarebutton"></span>)}
  }

  function renderSquare3(floor) {
    if (elevators[2].status === "Elevator is standing still" && movingElevator3 === 3 && floor.floor === elevators[2].floor) {return <span className="button squarebuttongo"></span>;}
    else if (elevators[2].status === "Elevator is standing still" && movingElevator3 !== 3 && floor.floor === elevators[2].floor) {return <span className="button squarebuttonstill"></span>;}
    else if ((elevators[2].status === "Elevator is running" && floor.floor === elevators[2].floor)) {return <span className="button squarebuttongoing"></span>;}
    else {return (<span className="button squarebutton"></span>)}
  }



  return (
    <div className="flex-container">

      <div className="flex-child-left">
        { elevatorButtons.map(elevatorButton => {
          return (
            <div key={elevatorButton.row} >
              <button className="button roundbutton" onClick={() => handleClick(elevatorButton.column1)}>{elevatorButton.column1}</button>
              <button className="button roundbutton" onClick={() => handleClick(elevatorButton.column2)}>{elevatorButton.column2}</button>
            </div>
          );})}
      </div> 

      <div className="flex-child-right">
        <span> 1 2 3 </span> <div></div>
        { floors.map(floor => {
          return (
            <div key={floor.id}>
              <span>{renderSquare1(floor)}</span><span>{renderSquare2(floor)}</span><span>{renderSquare3(floor)}</span>
              </div>
          );})}
      </div>
    
    </div>
  )
}



//export const App = () => {};