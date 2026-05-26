/** @odoo-module */
import { PosStore } from "@point_of_sale/app/services/pos_store";
import { patch } from "@web/core/utils/patch";


patch(PosStore.prototype, {

    // setup() {
    //     super.setup();
    //     console.log("this.......", this)
    // },

    async pay() {
        super.pay();
        console.log(this);
        const settings_discount = this.config.discount_limit;
        // if (settings_discount > 100){
        //     alert("Discount limit exceeded");
        // }
        // console.log(this.env["hr.employee.public"].search_read([["id", "=", resourceId]]);
    }
});