function header() {
    $.ajax({
        url: "/common/header.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            document.write(html);
        }
    });
}

function footer() {
    $.ajax({
        url: "/common/footer.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            document.write(html);
        }
    });
}
