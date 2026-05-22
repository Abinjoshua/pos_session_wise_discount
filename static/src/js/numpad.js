/** @odoo-module */
import { _t } from "@web/core/l10n/translation";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { patch } from "@web/core/utils/patch";
import { Numpad } from "@point_of_sale/app/components/numpad/numpad";

patch(Numpad.prototype, {
   onClickMessage() {
       this.dialog.add(ConfirmationDialog, {
           body: _t("Your custom Message is here"),
           confirmLabel: _t("Confirm"),
       });
   },
});
