/**
 * 作者：夏冬琦
 * 最后修改时间：2018-11-3
 */


class Server{

	/**
	 * 构造方法
	 * @param {*} serverConfig 
	 * 	参数说明：
	 * 	{
	 * 		ip:'服务器ip地址',
	 * 		port:服务器端口号,
	 * 		app:'服务应用名称'
	 * 	}
	 */
	constructor(serverConfig){

		if(!serverConfig){
			if(window.localStorage){

				let ip = window.localStorage.getItem('server.ip');
				let port = window.localStorage.getItem('server.port');
				let app = window.localStorage.getItem('server.app');

				this.serverConfig={
					ip:ip?ip:'localhost',
					port:port?port:'8080',
					app:app?app:'OA'
				}
				
			}else{
				this.serverConfig={
					ip:'localhost',
					port:'8080',
					app:'OA'
				}
				TopTips("LocalStorage不被支持！恢复默认服务器地址："+this.baseURL());
			}

		}else{
			this.serverConfig={
				ip:serverConfig.ip?serverConfig.ip:'localhost',
				port:serverConfig.port?serverConfig.port:8080,
				app:serverConfig.app?serverConfig.app:'OA'
			};
		}

		window.localStorage.setItem('server.ip',this.serverConfig.ip);
		window.localStorage.setItem('server.port',this.serverConfig.port);
		window.localStorage.setItem('server.app',this.serverConfig.app);
		
	}

	/**
	 * 设置服务器参数
	 * @param {} serverConfig 
	 */
	setServerConfig(serverConfig){
		this.serverConfig={
			ip:serverConfig.ip?serverConfig.ip:'localhost',
			port:serverConfig.port?serverConfig.port:8080,
			app:serverConfig.app?serverConfig.app:'OA'
		};
		window.localStorage.setItem('server.ip',this.serverConfig.ip);
		window.localStorage.setItem('server.port',this.serverConfig.port);
		window.localStorage.setItem('server.app',this.serverConfig.app);
	}

	/**
	 * 获得基础url
	 */
	baseURL(){
		return `http://${this.serverConfig.ip}:${this.serverConfig.port}/${this.serverConfig.app}`;
	}

	/**
	 * 
	 * @param {*} options 
	 *  参数说明：
	 * 	{
	 * 		url:'请求地址，默认""',
	 * 		method:'请求方式，默认POST',
	 * 		data:'请求数据（参数），默认undefined',
	 * 		type:'响应数据类型，默认JSON',
	 * 		contentType:'请求数据类型，默认application/x-www-form-urlencoded',
	 * 		processData:是否将请求数据序列化为请求参数串形式（如"param1=abc&param2=678"） 默认为true,
	 * 		handler:处理响应数据的回调函数 参数为响应数据
	 * 	}
	 */
	ajax(options){	
		var url = this.baseURL()+(options.url?options.url:'');
		var method = options.method?options.method:'POST';
		var data = options.data?options.data:undefined;
		var type = options.dataType?options.dataType:'JSON';
		var contentType = options.contentType===false ? false : ( options.contentType?options.contentType:'application/x-www-form-urlencoded');
		var processData = options.processData===false ? false : (options.processData?options.processData:true);
		
		var myhandler = options.handler && typeof(options.handler)==='function' ? options.handler : undefined;
		
		var index = layer.open({type:2,shade: 'background-color: rgba(100, 100, 100, 0.3)'});
		try{
			console.log({
				url:url,
				data:data,
				method:method,
				dataType:type,
				contentType:contentType,
				processData:processData,
				xhrFields:{withCredentials: true},
				crossDomain: true
			});
			$.ajax({
				url:url,
				data:data,
				method:method,
				dataType:type,
				contentType:contentType,
				processData:processData,
				xhrFields:{withCredentials: true},//启用跨域认证（启用Session追踪）
				crossDomain: true
			}).done((data) => {
				layer.close(index);
				try{
					
					if(myhandler){
						myhandler(data);
					}
					
				}catch(err){
					console.log(err);
					TopTips("JS代码可能出错了！");
				}
				
			}).fail((xhr) => {
				layer.close(index);
				console.log(xhr);
				TopTips("服务器端错误："+xhr.status);
			});
			
		}catch(err){
			layer.close(index);
			console.log(err);
			TopTips("JS代码可能出错了！");
		}
		
		
	}


	/**
	 * 
	 * @param {*} options 
	 * 	参数说明：
	 * 	{
	 * 		title : '提示信息标题',
	 * 		text : '提示信息文字',
	 * 		其它属性同ajax方法
	 * 	}
	 */
	ajaxWithConfirm(options){	
	
		if((!options.title) && (!options.text)){
			this.ajax(options);
			return;
		}	

		var warnTitle = options.title?options.title:'';
		var warnText = options.text?options.text:'';
		
		Dialog.confirm({
			title: warnTitle,
			message: warnText,
			skin:'ios',
			showCancelButton: true
		}).then(() => {
			this.ajax(options);
		}).catch(() => {});
		
		
	}


	/**
	 * 从服务器加载JSON数据
	 * 	参数opts json格式的参数，主要参数具体说明如下：
	 * 		{ 			
	 * 			url : '请求地址',
	 * 			data : '请求参数' 		
	 * 		}
	 * 
	 * 	参数handler 处理服务器响应数据的函数
	 */
	loadData(opts,handler){
		
		opts.handler = handler ;
		
		this.ajax(opts);
	}

	/**
	 * 从服务器加载文本
	 * 	参数opts json格式的参数，主要参数具体说明如下：
	 * 		{ 			
	 * 			url : '请求地址',
	 * 			data : '请求参数' 		
	 * 		}
	 * 
	 * 	参数handler 处理服务器响应数据的函数
	 */
	loadText(opts,handler){
		
		opts.dataType='text';

		opts.handler = handler ;
		
		this.ajax(opts);
	}

	/**
	 * 从服务器加载 html
	 * 	参数opts json格式的参数，主要参数具体说明如下：
	 * 		{ 			
	 * 			url : '请求地址',
	 * 			data : '请求参数' 		
	 * 		}
	 * 
	 * 	参数handler 处理服务器响应数据的函数
	 */
	loadHtml(opts,handler){
		
		opts.dataType='html';

		opts.handler = handler ;
		
		this.ajax(opts);
	}


	/**
	 * 对服务器发出操作要求
	 * 
	 * 	参数opts json格式的参数，主要参数具体说明如下：
	 * 		{
	 * 			title : '提示信息标题',
	 * 			text : '提示信息文字',
	 * 			url : '请求地址',
	 * 			data : '请求参数'	
	 * 		}
	 * 
	 * 	参数okHander 请求成功后执行的函数
	 */
	operate(opts,okHandler){
		
		opts.dataType = 'JSON';
		opts.handler = function(result){
			
			if (result.success) {
				
				Toast.success(result.message);
				
				if(okHandler)okHandler(result);
				
			} else {
				TopTips(result.message);
			}
			
		};
		
		this.ajaxWithConfirm(opts);
	}



	/**
	 * 对服务器发出可上传文件的操作要求
	 * 参数说明
	 * 	参数opts json格式的参数，具体说明如下：
	 * 		{
	 * 			title : '提示信息标题',
	 * 			text : '提示信息文字',
	 * 			url : '请求地址',
	 * 			data : '请求参数'
	 * 		
	 * 		}
	 * 	参数 okHander 请求成功后执行的函数
	 */
	operateMultipart(opts,okHandler){
		opts.contentType=false
		opts.processData=false;
		
		this.operate(opts,okHandler);
	}




}


Server.createServer=function(config){
	return new Server(config);
};

/**
 * 服务器操作对象
 */
const Serv = Server.createServer();



/**
 * 通过Vue实例引用的服务器对象
 */
Vue.prototype.$serv=Serv;


