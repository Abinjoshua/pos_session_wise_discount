/** @odoo-module */
import {PosStore} from "@point_of_sale/app/services/pos_store";
import {patch} from "@web/core/utils/patch";


patch(PosStore.prototype, {


    async pay() {

        const sessionId = this.session.id;
        const settings_discount = this.config.discount_limit;

        const lines = await this.data.call(
            "pos.order.line",
            "search_read",
            [
                [["order_id.session_id", "=", sessionId]],
                ["price_unit", "qty", "discount"]
            ]
        );

        let oldDiscount = 0;
        let newDiscount = 0;

        lines.forEach(line => {
            oldDiscount +=
                (line.price_unit * line.qty * line.discount) / 100;
        });

        const currentOrder = this.getOrder();

        currentOrder.getOrderlines().forEach(line => {
            newDiscount += (
                (line.price_unit || 0) *
                (line.qty || 0) *
                (line.discount || 0)
            ) / 100;
        });
        const totalDiscount = oldDiscount + newDiscount;

        let current_session_limit =  settings_discount - oldDiscount;

        if (totalDiscount > settings_discount) {
            alert(`Discount limit exceeded, your current session balance limit is ${current_session_limit}`);
            return;
        }
        await super.pay();

    }
});