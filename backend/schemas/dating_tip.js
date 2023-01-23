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
            name: 'tip_title',
            type: 'string',
            title: 'Dating Tip Title',
        },
        {
            name: 'tip_text',
            type: 'array',
            of: [{type: 'block'}],
            title: 'Dating Tip Text',
        },
        {
            name: 'tip_image',
            type: 'image',
            title: 'Dating Tip Image',
        },
    ]
}
