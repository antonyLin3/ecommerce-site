export default {
    name: 'footerBanner',
    title: 'FooterBanner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string'
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'SmallText1',
            type: 'string'
        },
        {
            name: 'smallText',
            title: 'SmallText2',
            type: 'string'
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string'
        },
        {
            name: 'largeText',
            title: 'LargeText',
            type: 'string'
        },
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string'
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string'
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string'
        }
    ]
}