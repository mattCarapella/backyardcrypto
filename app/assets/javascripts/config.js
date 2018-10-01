CKEDITOR.editorConfig = function(config) {
    config.language = 'en';
    //config.width = '700';
    config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
    config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
    config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
    config.filebrowserImageUploadUrl = "/ckeditor/pictures";
    config.filebrowserUploadUrl = "/ckeditor/attachment_files";

    //config.removeButtons = 'Underline,JustifyCenter';
  
    // config.toolbar_Pure = [
    //   '/', {
    //     name: 'basicstyles',
    //     items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
    //   }, {
    //     name: 'paragraph',
    //     items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
    //   }, {
    //     name: 'links',
    //     items: ['Link', 'Unlink']
    //   }, '/', {
    //     name: 'styles',
    //     items: ['Styles', 'Format', 'Font', 'FontSize']
    //   }, {
    //     name: 'colors',
    //     items: ['TextColor', 'BGColor']
    //   }, {
    //     name: 'insert',
    //     items: ['Image', 'Table', 'HorizontalRule', 'PageBreak']
    //   }
    // ];
    // config.toolbar = 'Pure';
    // return true;

    config.toolbar_moderator = [
        ['FontSize'], ['Bold', 'Italic', 'Underline'], ['JustifyLeft', 'JustifyCenter', 'JustifyRight'], ['TextColor'], ['Link']
    ];

    config.toolbar_editor = [
        //['Find', 'SelectAll'], ['Anchor'], ['Maximize']
    ];

    config.toolbar = 'moderator';
  };

  $(document).ready(function() {

 });
