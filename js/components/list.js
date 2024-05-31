import { id, insert } from "../methods/dom.js";
import { item } from "./item.js";
import { currency } from "../methods/style.js";

export class list {
    constructor(name, un, total) {
        this.name = name;
        this.un = un;
        this.total = total;
    }

    static $content = "";
    static $total = 0;
    static $totalDisplay = id("list-total");
    static $address = id("address");
    static $list = id("list-items");

    static def() {
        this.$list.innerHTML = "";

        this.$total = 0;
        this.$content = "*Pedidos*\n\n";
        for (let i = 0; i < item.data.length; i++) {
            let $item = item.data[i];
            if ($item.total > 0) {
                let $new = new list($item.name, $item.un, $item.total);
                this.$total += $item.total;
                insert($new.element, this.$list);
                this.$content += `*${$item.un}* - ${$item.name} | *${currency($item.total)}*\n`;
            }
        }

        this.$content += `\nTotal: *${currency(this.$total)}*\nDireccion: *${this.$address.value}*`;
        this.$totalDisplay.innerText = `${currency(this.$total)}`;
    }

    get element() {
        return `<li class="list-item">${this.un} - ${this.name} = ${currency(this.total)}</li>`;
    }
}
