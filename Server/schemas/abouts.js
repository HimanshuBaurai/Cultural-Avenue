export default {
    name: 'abouts',
    title: 'Abouts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'video',
            type: 'file',
            title: 'Video',
            description: 'Upload a video file',
            options: {
                accept: 'video/mp4,video/x-m4v,video/*'
            }
        },

    ]
}