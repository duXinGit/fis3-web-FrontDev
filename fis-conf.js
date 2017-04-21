fis.match('/static/*', {
  useHash: true
});

fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    //allInOne: true
  })
});

/***************************** css *****************************/
fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
});

//合并css 到/static/aio.css
fis.match('*.{css,less}', {
    packTo: '/static/aio.css'
});

//按 packOrder（由小到大） 顺序合并
fis.match('static/common.css', {
    packOrder: -100
});

fis.match('static/about.css', {
    packOrder: -99
});

fis.match('static/index.css', {
    packOrder: -98
});

fis.match('static/test.less', {
    packOrder: -97
});

//css压缩
fis.match('*.{css,less}', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

/***************************** js *****************************/
//合并js 到/static/aio.js
fis.match('*.js', {
    packTo: 'static/aio.js'
});

//压缩js
fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});