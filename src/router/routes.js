import routesComponent from './routesComponent.js'

export default [

	{
		path: '/',
		redirect: '/home/choice'
	},
	
	{
		path: '/home',
		name: 'Home',
		component: routesComponent.Home,

		//配置二级路由
		children: [
		    {
				path: 'choice',
				name: 'Choice',
				component: routesComponent.Choice,
				redirect: '/home/choice/bottom',
				
				children: [
				   {
				   	path: 'bottom',
				   	name: 'Bottom',
				   	component: routesComponent.Bottom
				   }
				]

			},

			{
				path: 'vip',
				name: 'Vip',
				component: routesComponent.Vip,
				redirect: '/home/vip/bottom',
				
				children: [
				   {
				   	path: 'bottom',
				   	name: 'Bottom',
				   	component: routesComponent.Bottom
				   }
				]
			},

			{
				path: 'classify',
				name: 'Classify',
				component: routesComponent.Classify,
				redirect: '/home/classify/bottom',
				
				children: [
				   {
				   	path: 'bottom',
				   	name: 'Bottom',
				   	component: routesComponent.Bottom
				   }
				]
			},

			{
				path: 'rank',
				name: 'Rank',
				component: routesComponent.Rank,
				redirect: '/home/rank/bottom',
				
				children: [
				   {
				   	path: 'bottom',
				   	name: 'Bottom',
				   	component: routesComponent.Bottom
				   }
				]
			}

		]

	},
	
	
	{
		path: '/mybook',
		name: 'Mybook',
		component: routesComponent.Mybook
	},

	{
		path: '/booklist',
		name: 'Booklist',
		component: routesComponent.Booklist
	},
	
	{
		path: '/bookdetail/:pid',
		name: 'Bookdetail',
		component: routesComponent.Bookdetail
	},
	
    {
		path: '/bookdirectory/:pid',
		name: 'Bookdirectory',
		component: routesComponent.Bookdirectory
	},
	
	{
		path: '/reading/:pid/:a',
		name: 'Reading',
		component: routesComponent.Reading
	},
	
	{
		path: '/classifydetail/:name',
		name: 'Classifydetail',
		component: routesComponent.Classifydetail
	},
	
	{
		path: '/rankdetail/:pid/:month/:total/:title',
		name: 'Rankdetail',
		component: routesComponent.Rankdetail
	},
	
	{
		path: '/search',
		name: 'Search',
		component: routesComponent.Search
	}

]