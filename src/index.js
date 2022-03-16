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

console.log(`jsx`, vdom);

const newDom = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀)</h2>
    <div>
      嵌套1<div>嵌套222222222</div>
    </div>
    <h3>h3h3h3h33h</h3>
    {2 == 1 && <div>如果2和1相等会渲染</div>}
    {2 == 2 && <div>2</div>}

    <button onClick={() => alert('你好！！！！')}>点击我</button>

    <input type="text" value="13" />
  </div>
);

// TinyReact.render(vdom, document.getElementById('root'));

// setTimeout(() => {
//   TinyReact.render(newDom, document.getElementById('root'));
// }, 5000);

// TinyReact.render(vdom, document.getElementById('root'));

// console.log(vdom);

// function Demo() {
//   return <div>hello</div>;
// }

// function Heart(props) {
//   return (
//     <div>
//       {props.title}
//       <Demo />
//     </div>
//   );
// }

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Default Title',
    };
  }

  handleClick = () => {
    this.setState({ title: 'Change Title' });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.props.name}
        <button onClick={this.handleClick}>改变</button>
      </div>
    );
  }
}

function Heart(props) {
  return <div>{props.title}</div>;
}

TinyReact.render(vdom, document.getElementById('root'));

setTimeout(() => {
  TinyReact.render(newDom, document.getElementById('root'));
}, 3000);
