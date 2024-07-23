import Card from "./Card"
import Footer from './Footer'
import { useState, useEffect } from "react"

function App() {

  // Set the date we're counting down to
  let countDownDate = new Date("July 30, 2024 15:37:25").getTime();
    
  const [time, setTime] = useState(new Date());

    useEffect( () => {
        // eslint-disable-next-line no-unused-vars
        const intervalId = setInterval( () => {
            setTime(new Date())
        } , 1000);

        return () => {
            clearInterval();
        }

    }, [] );

    function formatTime(){
      let distance = countDownDate - time;
  
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);  
        return [padZero(days),padZero(hours), padZero(minutes), padZero(seconds)]
    }

    function padZero(num){
        num = Math.max(num, 0);
        return (num < 10 ? '0' : '') + num;
    }


  return (
    <div >
      <h1>{`We're launching soon`}</h1>
      <div className="counters">
        <Card value={formatTime()[0]} title='days' />
        <Card value={formatTime()[1]} title='hours' />
        <Card value={formatTime()[2]} title='minutes' />
        <Card value={formatTime()[3]} title='seconds' />
      </div>
      <Footer />
    </div>
  )
}

export default App
