import createDOMElement from './createDOMElement';
import mountElement from './mountElement';
import updateNodeElement from './updateNodeElement';
import updateTextNode from './updateTextNode';
import unmountNode from './unmountNode';
import diffComponent from './diffComponent';

const diff = (virtualDOM, container, oldDOM) => {
  console.log(`virtualDOM`, virtualDOM);
  const oldVirtualDom = oldDOM && oldDOM._virtualDom;
  const oldComponent = oldVirtualDom && oldVirtualDom.component;
  // 判断 oldDOM是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container);
  } else if (virtualDOM.type !== oldVirtualDom.type && typeof virtualDOM !== 'function') {
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (typeof virtualDOM.type === 'function') {
    // 组价
    diffComponent(virtualDOM, oldComponent, oldDOM, container);
  } else if (oldVirtualDom && virtualDOM.type === oldVirtualDom.type) {
    if (virtualDOM.type === 'text') {
      // 更新内容
      updateTextNode(virtualDOM, oldVirtualDom, oldDOM);
    } else {
      // 更新元素节点属性
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDom);
    }
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i]);
    });

    // 删除节点
    // 旧节点数量多于新节点数量，需要删除
    let oldChildNodes = oldDOM.childNodes;
    // 判断旧节点的数量
    if (oldChildNodes.length > virtualDOM.children.length) {
      // 有节点需要被删除
      for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
        unmountNode(oldChildNodes[i]);
      }
    }
  }
};

export default diff;
