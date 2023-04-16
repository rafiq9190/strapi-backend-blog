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
      "Image",
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
    mediaEmbed: {
      previewsInData: true,
    },
    image: {
      upload: {
        types: ["jpeg", "png", "gif", "svg+xml", "webp"],
        provider: "cloudinary",
        action: "upload",
        // Add any additional options as needed
        // For example
      }
    },
    imageResize: {
      handleSize: 8 // Set the handle size to 8 pixels
    }
  },
  // ...
});