// export statement makes document type defition (i.e. the contents of this file) available for import into schema.js.
export default {
    name: 'dating_tip',
    type: 'document',
    // What this document type is called in the Sanity Studio.
    // Non-technical users will see this value.
    // Conventionally, title is the uppercased version of name.
    title: 'Dating Tip',
    // An array of objects that describes the editable/populatable fields in this document
    fields: [
        { 
            name: 'tipSlug',
            type: 'slug',
            title: 'Slug',
            validation: Rule => Rule.required().error('Please generate a slug before publishing.'),
            options: {
                source: 'tipTitle', 
                maxLength: 40, 
              },
        },
        {
            name: 'tipDate',
            title: 'Tip Date',
            type: 'datetime',

        },
        {
            name: 'tipTitle',
            type: 'string',
            title: 'Dating Tip Title',
            validation: Rule => Rule.required().error('Please give this tip a title before publishing.'),
        },
        {
            name: 'tipText',
            type: 'array',
            of: [{type: 'block'}],
            title: 'Dating Tip Text',
            validation: Rule => Rule.required().error('Please give this tip some text before publishing.'),
        },
        {
            name: 'tipImage',
            type: 'image',
            title: 'Dating Tip Image',
            validation: Rule => Rule.required().error('Please upload an image for this tip before publishing.'),
        },
        {
            name:'tipImageAlt',
            type:'string',
            title:'Image Alt Text',
            description: 'A short description of the image associated with this Dating Tip.'
        }
    ],
    initialValue: () => ({
        tipDate: (new Date()).toISOString()
      }) 
}
