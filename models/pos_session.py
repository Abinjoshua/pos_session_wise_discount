from odoo import models


class PosSession(models.Model):
    _inherit = "pos.session"

    def _loader_params_pos_config(self):
        result = super()._loader_params_pos_config()

        result['search_params']['fields'].append(
            'discount_limit',
        )

        return result