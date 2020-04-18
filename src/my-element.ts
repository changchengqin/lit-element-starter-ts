import { html, customElement} from 'lit-element';
import { RootPageElement } from './root-page-element';

@customElement('my-element')
export class MyElement extends RootPageElement {
  render() {
    return html`
      <h1>Hello, world!</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
