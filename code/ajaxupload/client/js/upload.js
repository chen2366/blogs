function escapeTags(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

window.onload = function () {
    // 监听上传按钮
    var uploader = upload('uploadBtn', 'msgBox');
};

function upload(uploadBtn, msgBox)
{
    var btn    = document.getElementById(uploadBtn);
    var msgBox = document.getElementById(msgBox);

    return new ss.SimpleUpload({
        button: btn,
        url: upload_url,
        name: 'uploadfile',
        multipart: true,
        hoverClass: 'hover',
        focusClass: 'focus',
        responseType: 'json',
        onSubmit: function () {
            msgBox.innerHTML = ''; // empty the message box
            btn.innerHTML = 'Uploading...'; // change button text to "Uploading..."
        },
        onComplete: function (filename, response) {
            btn.innerHTML = 'Choose Another File';

            if (!response) {
                msgBox.innerHTML = 'Unable to upload file';
                return;
            }

            if (response.success === true) {
                msgBox.innerHTML = '<strong>' + escapeTags(filename) + '</strong>' + ' successfully uploaded.';

            } else {
                if (response.msg) {
                    msgBox.innerHTML = escapeTags(response.msg);

                } else {
                    msgBox.innerHTML = 'An error occurred and the upload failed.';
                }
            }
        },
        onError: function () {
            msgBox.innerHTML = 'Unable to upload file';
        }
    });
}