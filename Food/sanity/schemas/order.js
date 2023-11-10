export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        type: 'string', // Use lowercase 'string'
        options: {
            maxLength: 40
        }
    },
    {
        name: 'phone',
        title: 'Phone',
        type: 'string', // Use lowercase 'string'
        options: {
            maxLength: 11
        }
    },
    {
        name: 'address',
        title: 'Address',
        type: 'string', // Use lowercase 'string'
        options: {
            maxLength: 100
        }
    },
    {
        name:'method',
        title: "Method",
        type: "number"
    }

    ,{
        name: 'total',
        title: 'Total',
        type: 'number', // Use lowercase 'number'
    },
    {
        name: 'status',
        title: 'Status',
        type: 'number', // Use lowercase 'number'
    }
    ]
}
