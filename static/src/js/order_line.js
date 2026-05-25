/** @odoo-module */
import { Orderline } from "@point_of_sale/app/components/orderline/orderline";
import { patch } from "@web/core/utils/patch";

/** returns a function that gives the value of the product owner in the product field */
patch(Orderline.prototype, {
    get ProductOwner() {
        // console.log('line discount',this.line.getDiscount())
        let discount_sum = this.line.getDiscount();
        // this.lines.forEach(line => discount_sum += line.getDiscount());
        // console.log(discount_sum)

        return this;
    }
});