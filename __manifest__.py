# -*- coding: utf-8 -*-
{
    'name': "POS Session Wise Discount",
    'version': "1.0",
    'license': "LGPL-3",
    'summary': """POS Session Wise Discount, Designed to customize the POS module""",
    'description': """POS Product Owner, Designed to customize the POS module, restricts the discount limit of the customers according to limit""",
    'author': "Cybrosys",
    'website': "http://www.cybrosys.com",
    'sequence': 1,
    'application': True,
    'depends': ['base', 'point_of_sale', 'sale_management'],
    'auto_install': True,
    'data': [
        'views/res_config_settings_views.xml',
        # 'views/pos_config_view.xml',
    ],
    'assets': {
        'point_of_sale._assets_pos': [
            # 'pos_session_wise_discount/static/src/js/order.js',
            'pos_session_wise_discount/static/src/xml/product_screen.xml',
            'pos_session_wise_discount/static/src/js/product_screen.js',
            # 'pos_session_wise_discount/static/src/js/custom_button.js',
            # 'pos_session_wise_discount/static/src/xml/custom_button.xml',
            'pos_session_wise_discount/static/src/js/order_line.js',
            'pos_session_wise_discount/static/src/xml/order_summary.xml'
        ],
    }
}
