import { html, customElement} from 'lit-element';
import { RootPageElement } from './root-page-element';
import { PageQuery } from './page-element';
import './common-header'

export interface MyElementPageQuery extends PageQuery {
  hello: string;
}


@customElement('my-element')
export class MyElement extends RootPageElement<MyElementPageQuery> {

  createRenderRoot() {
    return this;
  }
  
  render() {
    this.pageQuery.hello = "hello"
    return html`
      <common-header></common-header>
      <h1>Hello, worldasdfa!${this.pageQuery.hello}</h1>
    `;
  }
}
