function App() {
  
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState("0");
  
  const display = (symbol) => {

    //split numbers
    let tmpArrayNumber =  (expression+symbol).split(/[+|\-|\*|=|\/]/);
    
    //doesn't allow multiple 00
    if(tmpArrayNumber[tmpArrayNumber.length - 1]!="00"){
      setExpression((expression + symbol)
                    //doesnt allow 5.5.5 and will display 5.55
                    .replace(/([1-9]+)(\.)([1-9]+)(\.)/g,'$1$2$3')
                    //doesn't allow more than two --
                    .replace(/([\-\-])([\-])/g,'$2')
                    //replace +-+ by + and so on
                    .replace(/([\+\-|\*\-|\/\-])([\+|\*|=|\/|\.\.])/g,'$2')
                    //replace -+ by + and so on
                    .replace(/([\+|\*|=|\/|\.\.])([\+|\*|=|\/|\.\.])/g, '$2'));
      
      //display last element on display
      if(tmpArrayNumber[tmpArrayNumber.length - 1]=="")
        {
          setAnswer(symbol);
        }
      else
        {
          setAnswer(tmpArrayNumber[tmpArrayNumber.length - 1]);
        }
      
      
      if(expression[expression.length-1] == "=")
        {
          if(/[1-9.]/.test(symbol)){
            setExpression(symbol);
          }
          else{
            setExpression((answer + symbol));
          }
        }
    }

    


  };
  
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression(eval(expression));
  }
  
  const allClear = () => {
    setExpression("");
    setAnswer("0");
  };
  
  const clear = () => {
    if(expression.toString().includes("e+"))
      {
        allClear();
      }
    else
      {
        setExpression((prev) => prev.split("").slice(0, prev.length-1).join(""));
        setAnswer((prev) => prev.split("").slice(0, prev.length-1).join(""));
      }
  };
  
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="dis" >
            <input type="text" value={expression} placeholder="" disabled />
            <div className="answer" id="display">{answer}</div>
          </div>
          <div onClick={allClear} className="padButton AC red" id="clear">AC</div>
          <div onClick={clear} className="padButton C red" id="C">C</div>
          <div onClick={() => display("/")} className="padButton div" id="divide">/</div>
          <div onClick={() => display("*")} className="padButton times" id="multiply">x</div>
          <div onClick={() => display("7")} className="padButton seven dark-gray" id="seven">7</div>
          <div onClick={() => display("8")} className="padButton eight dark-gray" id="eight">8</div>
          <div onClick={() => display("9")} className="padButton nine dark-gray" id="nine">9</div>
          <div onClick={() => display("-")} className="padButton minus" id="subtract">-</div>
          <div onClick={() => display("4")} className="padButton four dark-gray" id="four">4</div>
          <div onClick={() => display("5")} className="padButton five dark-gray" id="five">5</div>
          <div onClick={() => display("6")} className="padButton six dark-gray" id="six">6</div>
          <div onClick={() => display("+")} className="padButton add" id="add">+</div>
          <div onClick={() => display("1")} className="padButton one dark-gray" id="one">1</div>
          <div onClick={() => display("2")} className="padButton two dark-gray" id="two">2</div>
          <div onClick={() => display("3")} className="padButton three dark-gray" id="three">3</div>
          <div onClick={calculate} className="padButton equal" id="equals">=</div>
          <div onClick={() => display("0")} className="padButton zero dark-gray" id="zero">0</div>
          <div onClick={() => display(".")} className="padButton dot dark-gray" id="decimal">.</div>
        </div>
      </div>
    </>
  ); 
}

ReactDOM.render(<App/>, document.getElementById('root'));