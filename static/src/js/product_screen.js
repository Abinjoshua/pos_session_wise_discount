/** @odoo-module */
import { OrderSummary } from "@point_of_sale/app/screens/product_screen/order_summary/order_summary";
import { patch } from "@web/core/utils/patch";

patch(OrderSummary.prototype, {
    get DiscountLimit() {
        let discount_sum = 0;
        this.pos.getOrder().getOrderlines().forEach(line => discount_sum += line.prices.discount_amount);
        console.log(this.pos)

        return discount_sum;
    }
});