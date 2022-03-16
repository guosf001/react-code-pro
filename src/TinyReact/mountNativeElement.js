import mountElement from './mountElement';
import createDOMElement from './createDOMElement';

export default function mountNativeElement(virtualDOM, container) {
  let newElement = createDOMElement(virtualDOM, container);
  container.appendChild(newElement);
  let component = virtualDOM.component;

  if (component) {
    component.setDOM(newElement);
  }
}
