var index = function(caramel){
	var esb = require('/data/esb.json').slice(0, 10),
		        jaggery = require('/data/jaggery.json').slice(0, 10);
	caramel.render({
	    user: {
	        name: 'ruchira',
	        email: 'ruchira.wageesha@gmail.com'
	    },
	    navigation: [
	        {
	            title: 'My Account',
	            url: '/myaccount'
	        }
	    ],
	    samples: {
	        jaggery: {
	            title: 'Jaggery Samples',
	            data: jaggery
	        }
	    }
	});
}