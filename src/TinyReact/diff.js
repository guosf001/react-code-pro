import mountElement from './mountElement';

export default (virtualDOM, container, oldDOM) => {
  // 判断 oldDOM是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container);
  }
};
