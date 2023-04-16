module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  editor: {
    plugins: [
      "Heading",
      "Bold",
      "Italic",
      "Link",
      "BulletedList",
      "NumberedList",
      "ImageUpload",
    ],
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "imageUpload",
      "|",
      "undo",
      "redo",
    ],
  },
  // ...
});