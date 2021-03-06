// import React from 'react';

// function App() {
//   return <div className="App">Hello World</div>;
// }

// export default App;

import TinyReact from './TinyReact';

const vdom = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀)</h2>
    <div>
      嵌套1<div>嵌套111</div>
    </div>
    <h3>h3h3h3h33h</h3>
    {2 == 1 && <div>如果2和1相等会渲染</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert('你好')}>点击我</button>
    <h3>这个将会删除</h3>
    2，3
    <input type="text" value="13" />
  </div>
);

console.log(vdom);
