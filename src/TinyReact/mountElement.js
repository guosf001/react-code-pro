import mountNativeElement from './mountNativeElement';
import isFunction from './isFunction';
import mountComponent from './mountComponent';

export default (virtualDOM, container) => {
  if (isFunction(virtualDOM)) {
    // Component
    mountComponent(virtualDOM, container);
  } else {
    // NativeElement
    mountNativeElement(virtualDOM, container);
  }
};
