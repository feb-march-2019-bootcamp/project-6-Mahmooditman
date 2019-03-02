import Vue from 'vue/dist/vue'

let newform = new Vue({
    el: '#myform',
    data: {
        offers: [
        	{
        		name: 'Web Development',
        		price: 400,
        		active:false
        	},{
        		name: 'Design',
        		price: 500,
        		active:false
        	},{
        		name: 'Integration',
        		price: 350,
        		active:false
        	},{
        		name: 'Training',
        		price: 320,
        		active:false
            },{
        		name: 'Support/Month',
        		price: 150,
        		active:false
        	}
        ]
    },
    methods: {
    	togglestate: function(x){
            x.active = !x.active; //reversing the active state of list item
    	},
    	overallprice: function(){

        	let total = 0;

        	this.offers.forEach(x=>{
        		if (x.active==true){
        			total+= x.price;
        		}
        	});

    	   return total;
        }
    }
});
	