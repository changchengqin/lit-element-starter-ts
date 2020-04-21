import { LitElement } from 'lit-element';
export interface PageQuery {
    pageIndex?: number;
}
export declare class PageElement<T1 extends PageQuery = PageQuery, T2 extends PageQuery = PageQuery, T3 extends PageQuery = PageQuery> extends LitElement {
    pageQuery: (T1 & T2 & T3);
}
//# sourceMappingURL=page-element.d.ts.map