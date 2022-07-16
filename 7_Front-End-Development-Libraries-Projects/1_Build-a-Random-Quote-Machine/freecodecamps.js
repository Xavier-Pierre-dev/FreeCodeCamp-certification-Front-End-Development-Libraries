// 1 - import React and ReactDom on codepen we can simply use JS > parameter > Add External Scripts/Pens then search for the libs so that will add the libs behind the scene like if we do <script></script> using the cdn url for the lib we want import
// 2 - Get the API url : so for this step we simply use the API used by fcc for the example like this we are able to fetch data otherwise we should do it after finding an other API online or simply with hard coded data inside an array. Here we use const API = ...
//I use for this case react ; react-dom ; bootstrap

//take on the fcc example for the API link and color
const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
const colorList =[
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

class App extends React.Component {
  
state = {
  quotes: [],
  index: 0,
  color: "blue"
};
  
 componentDidMount = () => {
    console.log(API);
    const {quotes, index, color} = this.state;
    
    fetch(API)
  .then(response => response.json())
  .then(data => {
    // Here's a list of repos!
    console.log("de", data.quotes);
    this.setState({quotes:data.quotes});
    });
   
};
  
setRandomIndex = () => {

    const {quotes, index, color} = this.state;

    if(this.state.quotes.length > 0){
      let random = Math.floor(Math.random() * quotes.length);
            this.setState({index: random});
    }
       let randomColor = Math.floor(Math.random() * colorList.length);
           this.setState({color: colorList[randomColor]});

  };
  
  render(){
    const {quotes, index, color} = this.state;
    const quote = quotes[index];
    
    const randomColor = {color : color, fontSize:'23px'}

    //we should check if we have quote for performing certain render because if we dont we break the app
    //see when whe uncomment the next line
    //console.log("quote = " , quote.quote); //uncomment this line
    if(quote){
      console.log("quote = " , quote.quote);
      console.log("author = " , quote.author);
      console.log("color = ", color)
      
      //const randomColor = {color : color, fontSize:'23px'}
    }
    
    
    
    return (
      <div id="quote-box" style={randomColor}>
      { 
        quote && 
            <div>
              <p id="text">{quote.quote}</p>
              <p id="author">{quote.author}</p>
            </div>
       }
        
        <button onClick={this.setRandomIndex} id="new-quote">New Quote</button>
        {
          quote &&      
            <a id="tweet-quote" href={encodeURI('https://twitter.com/intent/tweet?text="' +
      quote.quote+' - '+quote.author)} target="_blank">Tweet</a>
        }
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));