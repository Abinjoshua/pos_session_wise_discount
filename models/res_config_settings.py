# -*- coding: utf-8 -*-
from odoo import fields, models, api
from odoo.exceptions import ValidationError


class ResConfigSettings(models.TransientModel):
    _inherit = "res.config.settings"

    is_session_discount_limit = fields.Boolean(string='Session Discount Limit', config_parameter='pos_session_wise_discount.is_session_discount_limit')
    session_discount_limit = fields.Float(string='Discount Limit', config_parameter='pos_session_wise_discount.session_discount_limit')

    # @api.onchange('is_session_discount_limit', 'session_discount_limit')
    # def _onchange_is_session_discount_limit(self):
    #
    #     limit = self.env['ir.config_parameter'].sudo().get_param('pos_session_wise_discount.session_discount_limit')
    #     total = 0
    #     pos_sessions = self.env['pos.session'].search([('state', '=', 'opened')])
    #
    #     if self.is_session_discount_limit:
    #         for session in pos_sessions:
    #             total += sum(session.order_ids.lines.mapped('discount'))
    #     print(total)
        # if total < float(limit):
        #     raise ValidationError('Discount limit reached.')
#

