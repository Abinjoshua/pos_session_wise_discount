# -*- coding: utf-8 -*-
from odoo import fields, models


class PosConfig(models.Model):
    _inherit = "pos.config"

    discount_limit = fields.Float(string='Discount Limit')
