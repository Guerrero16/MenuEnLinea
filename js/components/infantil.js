import { insert, id } from "../methods/dom.js";

export class infantil {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  static add(title, $id) {
    let $new = new infantil(title, $id);
    insert($new.element, id("infantil"));
  }

  get element() {
    return `
      <div class="group-category" id="${this.id}">
        <h2 class="group-title">${this.title}</h2>
      </div>
    `;
  }
}