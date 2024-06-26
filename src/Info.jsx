
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import image from "./image 15.png"
import image1 from "./Vector (1).png";
import image2 from "./Vector.png";
import image3 from "./Vector (2).png";
import image4 from "./Group.png";
import image5 from "./Vector (5).png"

export default function Info() {
    const [weather, setWeather] = useState(null);
    const [notes, saveNotes] = useState(localStorage.getItem('notes') || '');
    const [news, setNews] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState(0);
    const updateNotes = (e) => {
        saveNotes(e.target.value);
        localStorage.setItem('notes', JSON.stringify(e.target.value));
    }
    const userData = JSON.parse(localStorage.getItem('userData'));
    const selectedMovies = JSON.parse(localStorage.getItem('selectedMovies'));
    useEffect(() => {
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json')
            .then(response => response.json())
            .then(data => setNews(data.articles[Math.floor(Math.random() * data.articles.length | 1)]))
    }, [])
    useEffect(() => {
        fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=4OKIE7pWabm1ocnGdYq7PZZKBAakmr82')
            .then(response => response.json())
            .then(data => setWeather(data.timelines['daily'][0]['values']))
    }, [])
    const date = Date.now();
    const month = new Date(date).getMonth() + 1;
    const day = new Date(date).getDate();
    const year = new Date(date).getFullYear();
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const seconds = new Date(date).getSeconds();
    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(!toggle);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])
    const handleTimer = (operation, value) => {
        if (operation === 1) {
            setTime((time) => time + value);
        } else {
            setTime((time) => {
                if (time - value < 0) {
                    return 0;
                }
                return time - value;

            });
        }
    }
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours}:${minutes}:${seconds}`;
    }
    return (

        <div style={{backgroundColor:"black",width:"100vw",height:"100vh"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{
                display: 'flex',
                color: 'white',
                flexDirection: 'column',
                height: '250px',
                width:"500px",
                backgroundColor: '#5746EA',
                padding: '10px',
                borderRadius:"10px",
                marginLeft:"50px",
                marginTop:"10px"

            }}  >
                {userData ? <>
                     <img style={{margin:"20px",width:"100px",height:"200px"}} src={image}></img>
                     <div style={{marginLeft:"200px",marginTop:"35px",fontFamily: "Roboto",
                                     fontSize: "15px",
                                     fontWeight: "400",
                                     lineHeight: "10px",
                                     letterSpacing: "1%",
                                    textAlign: "left",
                                    }}>
                    <p>{userData.name}</p>
                    <p>{userData.email}</p>
                    <p style={{fontSize:"25px"}}>{userData.username} </p></div>
                </> : 'No user data'}

                {selectedMovies ? <div style={{
                    
                    marginLeft:"200px",
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows:"repeat(2,1fr)"
                }}>
                    <div style={{width:"50px",height:"10px",}}>{selectedMovies.map((movie, index) => <p key={index}>{movie.movie} </p>)}</div>
                </div> : 'No selected movies'}
            </div>
            <textarea style={{
                maxHeight: "440px",
                minHeight: "440px",
                minWidth: "400px",
                maxWidth: "400px",
                padding: "10px",
                background: "#F1C75B",
                borderRadius: "10px",
                marginTop: "10px",
                marginLeft:"10px"
            }}value={notes} onChange={updateNotes}>All Notes
            </textarea>

            <div style={{width:"400px",height:"600px",backgroundColor:"white",marginTop:"10px",marginLeft:"10px",borderRadius:"10px",padding:"20px"}}>{news ? <div >
                <img src={news.urlToImage} style={{width:"400px",height:"300px",justifyContent:"justify",marginTop:"80px"}} alt={news.title} />
                <p style={{fontFamily:"Roboto",fontSize:"15px",fontWeight:"200"}}>{news.title}</p>
                <p style={{height:"300px",width:"300px",backgroundColor:"rgba(255, 255, 255, 1)",textAlign:"justify",marginTop:"90px",fontFamily:"Roboto",fontWeight:'400',fontSize:'10px'}}>{news.description}</p>
                <p style={{fontFamily:"Roboto",fontSize:"15px",fontWeight:"200px"}}>{news?.content?.split('[')[0]}</p>

            </div> : "No news"}</div>
            </div>
            
            <div style={{width:"520px",height:"140px",marginTop:"-360px",marginLeft:"50px",borderRadius:"10px",backgroundColor:"rgba(16, 23, 68, 1)"}}>{weather ? <div style={{
                
               
            }}>
                <div className="dayhour" style={{backgroundColor:"rgba(255, 74, 222, 1)",display:"flex",width:"520px",borderRadius:"10px",justifyContent:"space-evenly"}}>
                <p>  {day}-{month}-{year}</p>
                <p>{hours}:{minutes}:{seconds}</p></div>
                <div style={{display: 'flex',
                color: 'white',
                flexDirection: 'row',
                backgroundColor: "rgba(16, 23, 68, 1)",
                padding:"10px",
                borderRadius:"10px"}}>
                <p className="temperature"> {weather.temperatureAvg}°C</p>
                <p className="pressure1">Pressure <img className="pressure" src={image1}></img>{weather.pressureSurfaceLevelAvg} </p>
                <p className="wind1"><img  className="wind" src={image3}></img> WindSpeed {weather.windSpeedAvg}</p>
                <p className="humidity1"><img className="humidity" src={image4}></img> Humidity {weather.humidityAvg}</p></div>
            </div> : "No weather"}</div>

            <div style={{width:"950px",height:"170px",backgroundColor:"rgba(30, 35, 67, 1)",borderRadius:"10px",marginTop:"50px",marginLeft:"50px",justifyContent:"space-evenly"}}><CountdownCircleTimer
                isPlaying={isPlaying}
                duration={time}
                colors={['rgba(255, 106, 106, 1)']}
             
            >
                {({ remainingTime }) => formatTime(remainingTime)}
            </CountdownCircleTimer>
            <div style={{display:"flex",color:"pink",marginTop:"-180px",justifyContent:"space-evenly",marginLeft:"80px",fontFamily:"Roboto",fontWeight:"400"}}>
            <p >Hours</p>
            <p style={{paddingLeft:"80px"}}>Minutes</p>
            <p style={{paddingLeft:"0px"}}>Seconds</p></div>
            <div className="buttons">
            <button className="btn1" onClick={() => handleTimer(1, 3600)}><img className="vector"src={image2}></img></button>
            <button className="btn2" onClick={() => handleTimer(1, 60)}><img className="vector"src={image2}></img></button>
            <button className="btn3" onClick={() => handleTimer(1, 1)}><img className="vector"src={image2}></img></button>
            <button className="btn4" onClick={() => handleTimer(0, 3600)}><img className="vector"src={image5}></img></button>
            <button className="btn5" onClick={() => handleTimer(0, 60)}><img className="vector"src={image5}></img></button>
            <button className="btn6" onClick={() => handleTimer(0, 1)}><img className="vector"src={image5}></img></button>
            </div>
            <button style={{marginLeft:"360px",marginTop:"0px",backgroundColor:"rgba(255, 106, 106, 1)",border:"none"}} onClick={() => setIsPlaying(true)}>Start</button>
           
            <button className="browse">Browse</button>
            
            </div>
        </div>

    )
}