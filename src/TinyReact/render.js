import diff from './diff';

export default (virtualDOM, container, oldDOM = container.firstChild) => {
  diff(virtualDOM, container, oldDOM);
};
