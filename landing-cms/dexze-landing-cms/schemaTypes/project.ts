export default {
    name: 'project',
    title: 'Projects',
    type: 'document',

    fields: [

        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',

            options: {
                source: 'title'
            }
        },

        {
            name: 'thumbnail',
            title: 'Work Thumbnail',
            type: 'image'
        },

        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text'
        },

        {
            name: 'banner',
            title: 'Banner Image',
            type: 'image'
        },

        {
            name: 'introText',
            title: 'Intro Text',
            type: 'text'
        },

        {
            name: 'section1Text',
            title: 'Section 1 Text',
            type: 'text'
        },

        {
            name: 'section1Images',
            title: 'Section 1 Images',
            type: 'array',

            of: [
                {
                    type: 'image'
                }
            ]
        },

        {
            name: 'section2Text',
            title: 'Section 2 Text',
            type: 'text'
        },

        {
            name: 'section2Images',
            title: 'Section 2 Images',
            type: 'array',

            of: [
                {
                    type: 'image'
                }
            ]
        },

        {
            name: 'section3Text',
            title: 'Section 3 Text',
            type: 'text'
        },

        {
            name: 'section3Images',
            title: 'Section 3 Images',
            type: 'array',

            of: [
                {
                    type: 'image'
                }
            ]
        }

    ]
}