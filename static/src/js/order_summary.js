/** @odoo-module */
import { OrderSummary } from "@point_of_sale/app/screens/product_screen/order_summary/order_summary";
import { patch } from "@web/core/utils/patch";

patch(OrderSummary.prototype, {
    get DiscountLimit() {

        let order = this.pos.getOrder();
        let discount_sum = 0;

        order.getOrderlines().forEach(line => {
            discount_sum += line.prices.discount_amount;
        });

        const limit = this.pos.config.discount_limit;

        if (discount_sum > limit ) {
            alert("Discount limit exceeded");
        }
        return discount_sum;
    }
});