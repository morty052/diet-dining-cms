export default {
  type: 'document',
  name: 'users',
  title: 'Users',
  fields: [
    {
      name: 'user_avatar',
      title: 'Avatar',
      type: 'image',
    },
    {
      name: 'user_firstname',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'user_lastname',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'user_email',
      title: 'User Email',
      type: 'string',
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Order',
          name: 'order',
          to: [{type: 'orders'}],
        },
      ],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'longitude',
          title: 'Longitude',
          type: 'string',
        },
        {
          name: 'latitude',
          title: 'Latitude',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
      ],
    },
    {
      name: 'meal_preferences',
      title: 'Meal_Preferences',
      type: 'object',
      fields: [
        {
          name: 'vegetarian',
          title: 'Vegetarian',
          type: 'boolean',
        },
        {
          name: 'pescatarian',
          title: 'Pescatarian',
          type: 'boolean',
        },
        {
          name: 'keto',
          title: 'Keto',
          type: 'boolean',
        },
        {
          name: 'vegan',
          title: 'Vegan',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'allergies',
      title: 'Allergies',
      type: 'object',
      fields: [
        {
          name: 'peanuts',
          title: 'Peanuts',
          type: 'boolean',
        },
        {
          name: 'fish',
          title: 'Fish',
          type: 'boolean',
        },
        {
          name: 'milk',
          title: 'Milk',
          type: 'boolean',
        },
        {
          name: 'wheat',
          title: 'Wheat',
          type: 'boolean',
        },
        {
          name: 'soy',
          title: 'Soy',
          type: 'boolean',
        },
        {
          name: 'almonds',
          title: 'Almonds',
          type: 'boolean',
        },
      ],
    },
  ],
}
