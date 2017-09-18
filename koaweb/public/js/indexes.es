let timer=null;
class PraiseButton{
	constructor(num,element){
		this.num = num;
		this.element = element;
	}
	clickAction(){
		this.element.click(()=>{
			
			clearTimeout(timer);
			timer=setTimeout(()=>{
				if(this.num<10){
					$('#animation').addClass('num');
					this.element.css('webkit-filter',"grayscale(0)");
					this.num = add(this.num);
					console.log(this.num);
					setTimeout(function(){
						$('#animation').removeClass('num');
					},1000);
					axios.get('/index/updata')
		  			.then(function (response) {
			    		console.log(response);
			    		var result = response.data.data;
			    		if(result.success) {
			    			console.log('点赞成功')
			    		} else {
			    			console.log('点赞失败')
			    		}
  				}).catch(function (error) {
			   		console.log(error);
				})
				}else{
					this.num = 0;
					this.element.css('webkit-filter',"grayscale(1)");
				}

			},800)
		})
	}
}


class Thumb extends PraiseButton {
	constructor(num,element){
		super(num,element);
	}
}

export default {Thumb}
