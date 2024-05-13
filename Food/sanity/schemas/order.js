
export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        maxLength: 40
      }
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      options: {
        maxLength: 11
      }
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      options: {
        maxLength: 100
      }
    },
    {
      name: 'method',
      title: 'Method',
      type: 'number'
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number'
    },
{
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Cooking', value: '1' }t
            { title: 'OnWay', value: '2' },
            { title: 'Delivered', value: '3' },
            { title: 'Payment', value: '4' }
          ]
        }
      }
      
  ]
};
