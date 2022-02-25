import diff from './diff';

export default (virtualDOM, container, oldDOM) => {
  diff(virtualDOM, container, oldDOM);
};
