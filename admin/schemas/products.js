export default {
  type: 'document',
  name: 'products',
  title: 'Products',
  fields: [
    {
      name: 'image',
      title: 'image',
      type: 'image',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'description',
      type: 'text',
    },
    {
      name: 'vendor',
      title: 'vendor',
      type: 'reference',
      to: [{type: 'stores'}],
    },
  ],
}
