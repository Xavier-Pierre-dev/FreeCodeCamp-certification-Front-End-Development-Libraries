function App(){
    const [displayTime, setDisplayTime] = React.useState(60 * 25);
    const [sessionTime, setSessionTime] = React.useState(60 * 25);
    const [breakTime, setBreakTime] = React.useState(60 * 5);
    const [onBreak, setOnBreak] = React.useState(false);
    const [timerOn, setTimerOn] = React.useState(false);
    const [breakAudio, setbreakAudio] = React.useState(
      new Audio("https://assets.coderrocketfuel.com/pomodoro-times-up.mp3")
    );
    const [breakOverAudio, setbreakOverAudio] = React.useState(
      new Audio("https://assets.coderrocketfuel.com/pomodoro-times-up.mp3")
    );
    const playBreakSound = () => {
      breakAudio.currentTime = 1;
      breakAudio.play();
      setTimeout(() => breakAudio.pause(), 1500);
    };
    const playBreakOverSound = () => {
      breakOverAudio.currentTime = 1;
      breakOverAudio.play();
      setTimeout(() => breakOverAudio.pause(), 3000);
    };

    const formatTime = (mytime) => {
      let minutes = Math.floor(mytime / 60);
      let seconds = mytime % 60;
      return (
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds)
      );
    };
  
      const controlTime = () => {
      let second = 1000;
      let date = new Date().getTime();
      let nextDate = new Date().getTime() + second;
      let onBreakVariable = onBreak;
      if (!timerOn) {
        let interval = setInterval(() => {
          date = new Date().getTime();
          if (date > nextDate) {
            setDisplayTime((prev) => {
              if (prev <= 0 && !onBreakVariable) {
                playBreakSound();
                onBreakVariable = true;
                setOnBreak(true);
                return breakTime;
              } else if (prev <= 0 && onBreakVariable) {
                playBreakOverSound();
                onBreakVariable = false;
                setOnBreak(false);
                return sessionTime;
              } else {
                return prev - 1;
              }
            });

            nextDate += second;
          }
        }, 30);
        localStorage.clear();
        localStorage.setItem("interval-id", interval);
      }

      if (timerOn) {
        clearInterval(localStorage.getItem("interval-id"));
      }
      setTimerOn(!timerOn);
    };
  
    const resetTime = () => {
        setOnBreak(false);
        setDisplayTime(25 * 60);
        setBreakTime(5 * 60);
        setSessionTime(25 * 60);
      if (timerOn) {
        clearInterval(localStorage.getItem("interval-id"));
        setTimerOn(!timerOn);
      }
      
    };

  
    const changeTime = (amount, type) => {
    if (type == "session") {
      if (sessionTime <= 60 && amount < 0) {
        return;
      }
      if (sessionTime >= 60 * 60 && amount > 0) {
        return;
      }
      setSessionTime((prev) => prev + amount);
      if (!timerOn) {
        setDisplayTime(sessionTime + amount);
      }
    } else {
      if (breakTime <= 60 && amount < 0) {
        return;
      }
      if (breakTime >= 60 * 60 && amount > 0) {
        return;
      }
      setBreakTime((prev) => prev + amount);
    }
  };
  
  
  return(
    <>
      <div className="flex">
        <SetTimer
          title="Break Length"
          changeTime={changeTime}
          type="break"
          time={breakTime}
          formatTime={formatTime}
        />
        <SetTimer
          title="Session Length"
          changeTime={changeTime}
          type="session"
          time={sessionTime}
          formatTime={formatTime}
        />
      </div>
      <div className="timer">
 <h1 id="timer-label">{onBreak ? "Break" : "Session"}</h1>

      <span id="time-left">{formatTime(displayTime)}</span>
      <div className="control_container">
      <button
        className="btn-large deep-purple lighten-2"
        id="start_stop"
        onClick={controlTime}
      >
        {timerOn ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </button>
      <button
        className="btn-large deep-purple lighten-2"
        id="reset"
        onClick={resetTime}
      >
        <i className="fas fas fa-sync"></i>
      </button>
      <audio src={breakAudio} id="beep"></audio>
      </div>
      
      </div>
    </>
  );
}


function SetTimer({ title, changeTime, type, time, formatTime }){
  return(
      <div className="set-timer">
        <h1 id={`${type}-label`}>{title}</h1>
        <button id={`${type}-decrement`} onClick={() => changeTime(-60, type)}>
          <i className="fas fa-minus" />
        </button>
        <span id={`${type}-length`}>{formatTime(time).split(":")[0].replace(/(0)([0-9])/g,'$2')}</span>
        <button id={`${type}-increment`} onClick={() => changeTime(60, type)}>
          <i className="fas fa-plus" />
        </button>
      </div>
  );
}


ReactDOM.render(<App/>, document.getElementById("app"));