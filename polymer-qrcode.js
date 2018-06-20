import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-qrcode`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerQrcode extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer-qrcode',
      },
    };
  }
}

window.customElements.define('polymer-qrcode', PolymerQrcode);
