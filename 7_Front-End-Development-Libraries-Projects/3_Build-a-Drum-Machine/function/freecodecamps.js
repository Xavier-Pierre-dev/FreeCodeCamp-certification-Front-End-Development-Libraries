const audioClips =[
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];




function DrumMachine() {

  const [volume, setVolume] = React.useState(1);
  const [recording, setRecording] = React.useState("");
  const [currentTouch, setCurrentTouch] = React.useState("");
  const [speed, setSpeed] = React.useState(0.3);
  
  const recordingChange = (param) => {
    setCurrentTouch(param);
    setRecording(recording + param + " ");
    
    console.log("param + " + recording);
    console.log(param);
    
  }
  
  

  
  const clearRecording = () => {
    console.log("yolo");
    setRecording("");
  }
  
  const playRecording = () => {
    let index = 0;
    let recordArray = recording.split(" ")
    const interval = setInterval(()=>{
      const audioTag = document.getElementById(recordArray[index]);
      //set active to true and then after 200ms set to false with function setTimeout
      //this.setState({active : true});
      //setTimeout(()=>this.setState({active : false}), 200)
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, 1000 - 1000 * speed);
    setTimeout(
      () => clearInterval(interval), 
      (1000 - 1000 * speed) * recordArray.length -1
    );
  }
  

      return (
        <>
          <div className="text-center">
            <h2>Drum Machine</h2>
            <div className="display text-center" id="display">
              <h3>{currentTouch}</h3>
              {audioClips.map((clip) => (
                <Pad key={clip.id} clipInfo={clip} volumePad={volume} setRecordingPad={setRecording} setCurrentPad={setCurrentTouch}/>
              ))}
              <div className="text-center card-bottom">
                <br/>
                <h3>Volume</h3>
                <input type="range" step="0.01" onChange={(e)=>setVolume(e.target.value)} value={volume} max="1" min="0" className="w-50"/>
                <h3>{recording}</h3>
                {recording && (
                <>
                <div className="btn-container">
                    <button onClick={playRecording} className="btn btn-success">play</button>
                    <button onClick={clearRecording} className="btn btn-danger">clear</button>
                </div>
                <h3>Play record speed</h3>
                <input type="range" step="0.01" onChange={(eventSpeed)=>setSpeed(eventSpeed.target.value)} value={speed} max="1" min="0.1" className="w-50"/>
                </>
                )}  
              </div>
            </div>

          </div>
      </>
      );
}

function Pad({clipInfo, volumePad, setRecordingPad, setCurrentPad}) {
  
  
  const [active, setActive] = React.useState(false);
  
  React.useEffect(()=>{
    document.addEventListener('keydown',handleKeyPress);
    return () => {
      document.addEventListener('keydown',handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clipInfo.keyCode) {
      console.log(clipInfo.keyTrigger);
      playSound();
    }
  }
  
  const playSound = () => {
    const audioTag = document.getElementById(clipInfo.keyTrigger);
    //set active to true and then after 200ms set to false with function setTimeout
    setActive(true);
    setTimeout(()=>setActive(false), 200)
    audioTag.volume = volumePad;
    audioTag.currentTime = 0;
    audioTag.play();
    setCurrentPad(()=>clipInfo.keyTrigger);
    //work also : setCurrentPad(clipInfo.keyTrigger);
    //setCurrentPad(clipInfo.keyTrigger);
    setRecordingPad((prev)=>prev + clipInfo.keyTrigger + " ");
    
  }

  
      return (
        <div onClick={playSound} className={`drum-pad btn btn-secondary p-4 m-3 ${active && "btn-warning"}`} id={clipInfo.id} >
          <audio className="clip" id={clipInfo.keyTrigger} src={clipInfo.url} />
          {clipInfo.keyTrigger}
        </div>
    );
}


ReactDOM.render(<DrumMachine/>, document.getElementById('drum-machine'))