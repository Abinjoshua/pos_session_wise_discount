# -*- coding: utf-8 -*-
from odoo import fields, models


class ResConfigSettings(models.TransientModel):
    _inherit = "res.config.settings"

    discount_limit = fields.Float(string='Discount Limit', related='pos_config_id.discount_limit',readonly=False)
