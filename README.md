# react-code-section-lib
A package for showing code blocks in react ^_^

<img src="https://cdn.dribbble.com/users/2442115/screenshots/8699490/media/48bbda278683c7879bebd57f0e2f9271.gif" width="128"/> 



> This package developed in React with typescript and have these dependencies `react-syntax-highlighter`, `emotion`, `react-icons`.

> Checkout [npm](https://www.npmjs.com/package/react-code-section-lib/) and [github](https://github.com/masoodhesami/react-code-section-lib/)

## Get Started 🚀

In your react project run:

```bash
npm i react-code-section-lib
```
Then you can use it in your components. for example in App.jsx you can use it like:

```javascript
import './App.css';
import {CodeSection} from "react-code-section-lib"

function App() {
  const value = 
  ` import { render, screen } from '@testing-library/react';
 import App from './App';
  
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  `
  return (
    
      <CodeSection>
        {value}
      </CodeSection>
   
  );
}

export default App;

```

#### Result :

<img src="https://s25.picofile.com/file/8452293792/lib_img_1.png" width="800"/> 

## Props

The CodeSection component has three props:

Prop  | Values
------------- | -------------
showLineNumbers  | boolean
theme  | 'dark', 'light'
lang  | 'javascript', 'react', 'angular', 'vue', 'python'

### example

```javascript

import './App.css';
import { CodeSection } from "react-code-section-lib"

function App() {
  const value =
    ` import { render, screen } from '@testing-library/react';
 import App from './App';
  
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  `
  return (
    <div className='App'>
      <CodeSection showLineNumbers theme='dark' lang='react'>
        {value}
      </CodeSection>
    </div>

  );
}

export default App;

```


#### Result : 


<img src="https://s25.picofile.com/file/8452294218/lib_img_2.png" width="800"/> 


#### I would be happy if you would like to make it more complete together, and if you like it, give it a star 🌟 on github =))

