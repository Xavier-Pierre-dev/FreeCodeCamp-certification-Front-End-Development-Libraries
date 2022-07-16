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




class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 1,
      recording: "",
      currentTouch: "",
      speed: 0.3
    };
    
  }
  
  recordingChange(param) {
    this.setState({recording: this.state.recording + param + " ", currentTouch : param}, console.log("param + " + this.state.recording));
    console.log(param)
    
  }
  
  

  
  clearRecording(){
    console.log("yolo")
    this.setState({recording: ""},);
  }
  
  render()
  { 
  const playRecording = () => {
    let index = 0;
    let recordArray = this.state.recording.split(" ")
    const interval = setInterval(()=>{
      const audioTag = document.getElementById(recordArray[index]);
      //set active to true and then after 200ms set to false with function setTimeout
      //this.setState({active : true});
      //setTimeout(()=>this.setState({active : false}), 200)
      audioTag.volume = this.state.volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, 1000 - 1000 * this.state.speed);
    setTimeout(
    ()=>clearInterval(interval), (1000 - 1000 * this.state.speed) * recordArray.length -1
    );
  }
    
      return (
        <>
        
        
          <div className="text-center">
            <h2>Drum Machine</h2>
            <div className="display text-center" id="display">
              <h3>{this.state.currentTouch}</h3>
              {audioClips.map((clip) => (
                <Pad key={clip.id} clipInfo={clip} volumePad={this.state.volume} setRecordingPad={this.recordingChange.bind(this)} />
              ))}
              <div className="text-center card-bottom">
                <br/>
                <h3>Volume</h3>
                <input type="range" step="0.01" onChange={(e)=>this.setState({volume:e.target.value})} value={this.state.volume} max="1" min="0" className="w-50"/>
                <h3>{this.state.recording}</h3>
                {this.state.recording && (
                <>
                <div className="btn-container">
                    <button onClick={playRecording} className="btn btn-success">play</button>
                    <button onClick={this.clearRecording.bind(this)} className="btn btn-danger">clear</button>
                </div>
                <h3>Play record speed</h3>
                <input type="range" step="0.01" onChange={(eventSpeed)=>this.setState({speed:eventSpeed.target.value})} value={this.state.speed} max="1" min="0.1" className="w-50"/>
                </>
                )}  
              </div>
            </div>

          </div>
        
      </>
      );
  }
}

class Pad extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.clipInfo.keyCode) {
      console.log(this.props.clipInfo.keyTrigger);
      this.playSound();
    }
  }
  
  playSound(){
    const audioTag = document.getElementById(this.props.clipInfo.keyTrigger);
    //set active to true and then after 200ms set to false with function setTimeout
    this.setState({active : true});
    setTimeout(()=>this.setState({active : false}), 200)
    audioTag.volume = this.props.volumePad;
    audioTag.currentTime = 0;
    audioTag.play();
    this.props.setRecordingPad(this.props.clipInfo.keyTrigger)
  }

  
  render()
  {
      return (
        <div onClick={this.playSound} className={`drum-pad btn btn-secondary p-4 m-3 ${this.state.active && "btn-warning"}`} id={this.props.clipInfo.id} >
          <audio className="clip" id={this.props.clipInfo.keyTrigger} src={this.props.clipInfo.url} />
          {this.props.clipInfo.keyTrigger}
        </div>
    );
  }
}


ReactDOM.render(<DrumMachine/>, document.getElementById('drum-machine'))