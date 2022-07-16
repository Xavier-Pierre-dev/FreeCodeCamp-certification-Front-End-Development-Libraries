
const initialState = `# Welcome to my React Markdown Previewer!

<img src="x" onerror="alert('not happening')">

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
![javascript](https://raw.githubusercontent.com/Xavier-Pierre-dev/FreeCodeCamp-Certification_JavaScript-Algorithms-and-Data-Structures/main/logo.jpg)
`;



class App extends React.Component {
  state = {
    text : initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  



  
  render() {
    
    
    // https://marked.js.org/using_advanced
    marked.setOptions({
      renderer: new marked.Renderer(),
      breaks: true,
      pedantic: false,
      gfm: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
      highlight: function (code, lang, _callback) {
        
        if (hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code).value
        } else {
          return hljs.highlightAuto(code).value
        }
      },
      langPrefix: 'hljs language-',
    });
    

    


    const { text } = this.state;
    // sanitinize the output according to marked documentation : https://marked.js.org/#demo DOMPurify is recommended https://github.com/cure53/DOMPurify
    const beforeSanitinize = marked.parse(text);
    const sanitinize = DOMPurify.sanitize(beforeSanitinize);
    const markdown = marked(sanitinize);
    
    return(
      <div>
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="row">
            <div className="col-6">
              <h2 className="text-center">Enter your markdown</h2>
              <textarea id="editor" value={text} onChange={this.handleChange} className="form-control preview p-2"/>
            </div>
            <div className="col-6" >
              <h2 className="text-center">Result</h2>
              <div className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview" />
            </div>
         </div>
      </div>    
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));