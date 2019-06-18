module.exports = {
	publicPath: './',
	configureWebpack: {
		devServer:{
			proxy: {
				"/api" :{
					target: "http://api.zhuishushenqi.com/",
					secure: false,
					changeOrigin: true,
					pathRewrite: {'^/api' : ''}
				},
				
				"/chapterup" :{
					target: "http://chapterup.zhuishushenqi.com/",
					secure: false,
					changeOrigin: true,
					pathRewrite: {'^/chapterup' : ''}
				}
				
			}
		}
		
	}
}