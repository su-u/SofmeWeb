function header(rootDirectory){
    $.ajax({
        url: rootDirectory + "common/header.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDirectory); 
            document.write(html);
        }
    });
}

function footer(rootDirectory){
    $.ajax({
        url: rootDirectory + "common/footer.html", // ディレクトリー変更
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDirectory); 
            document.write(html);
        }
    });
}

$('#join').on('click',function(){
    console.log('boxをクリックしました！');
  });