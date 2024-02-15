export default {
  type: 'document',
  name: 'stores',
  title: 'Stores',
  fields: [
    {
      name: 'store_name',
      title: 'Store Name',
      type: 'string',
    },
    {
      name: 'store_logo',
      title: 'Store Logo',
      type: 'image',
    },
    {
      name: 'store_image',
      title: 'Store Image',
      type: 'image',
    },
    {
      name: 'store_address',
      title: 'Store Address',
      type: 'string',
    },
    {
      name: 'store_description',
      title: 'Store Description',
      type: 'text',
    },
    {
      name: 'store_status',
      title: 'Store Status',
      type: 'object',
      fields: [
        {
          name: 'open',
          title: 'Open',
          type: 'boolean',
        },
        {
          name: 'closed',
          title: 'Closed',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'store_approval',
      title: 'Store Approval',
      type: 'object',
      fields: [
        {
          name: 'approved',
          title: 'Approved',
          type: 'boolean',
        },
        {
          name: 'onboarding',
          title: 'Onboarding',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'store_products',
      title: 'Products',
      type: 'array',
      of: [
        {
          name: 'product',
          title: 'Product',
          type: 'object',
          fields: [
            {
              name: 'product_image',
              title: 'Product Image',
              type: 'image',
            },
            {
              name: 'product_name',
              title: 'Product Name',
              type: 'string',
            },
            {
              name: 'product_price',
              title: 'Product Name',
              type: 'number',
            },
            {
              name: 'product_description',
              title: 'Product Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'store_orders',
      title: 'Orders',
      type: 'array',
      of: [
        {
          name: 'order',
          title: 'Order',
          type: 'object',
          fields: [
            {
              name: 'order_image',
              title: 'Order Image',
              type: 'image',
            },
            {
              name: 'order_name',
              title: 'Order Name',
              type: 'string',
            },
            {
              name: 'order_price',
              title: 'Order Price',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
