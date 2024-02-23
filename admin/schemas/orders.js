export default {
  type: 'document',
  name: 'orders',
  title: 'Orders',
  fields: [
    {
      name: 'vendor',
      title: 'vendor',
      type: 'reference',
      to: [{type: 'stores'}],
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{type: 'users'}],
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          name: 'product',
          title: 'Product',
          type: 'object',
          fields: [
            {
              name: 'product_reference',
              title: 'Product_Reference',
              type: 'reference',
              to: {type: 'products'},
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'object',
      fields: [
        {
          name: 'pending',
          title: 'Pending',
          type: 'boolean',
        },
        {
          name: 'completed',
          title: 'Completed',
          type: 'boolean',
        },
        {
          name: 'cancelled',
          title: 'Cancelled',
          type: 'boolean',
        },
      ],
    },
  ],
}
