# -*- coding: utf-8 -*-
from odoo import fields, models, api


class PosSession(models.Model):
    _inherit = "pos.session"

    @api.onchange('order_ids')
    def onchange_order_ids(self):
        print("working")