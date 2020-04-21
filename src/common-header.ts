import { html, customElement} from 'lit-element';
import { PageElement } from './page-element';
import { MyElementPageQuery } from './my-element';

@customElement('common-header')
export class CommonHeader extends PageElement<MyElementPageQuery> {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h1>Hello, i'm from common-header${this.pageQuery.hello}.</h1>
    `;
  }
}
