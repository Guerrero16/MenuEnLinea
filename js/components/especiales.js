import { insert, id } from "../methods/dom.js";

export class especiales {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  static add(title, $id) {
    let $new = new especiales(title, $id);
    insert($new.element, id("especiales"));
  }

  get element() {
    return `
      <div class="group-category" id="${this.id}">
        <h2 class="group-title">${this.title}</h2>
      </div>
    `;
  }
}