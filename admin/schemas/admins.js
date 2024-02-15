export default {
  type: 'document',
  name: 'admins',
  title: 'Admins',
  fields: [
    {
      name: 'admin_avatar',
      title: 'Avatar',
      type: 'image',
    },
    {
      name: 'admin_firstname',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'admin_lastname',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'admin_active_otp',
      title: 'Admin Active OTP',
      type: 'string',
    },
    {
      name: 'admin_role',
      title: 'Admin role',
      type: 'string',
    },
  ],
}
