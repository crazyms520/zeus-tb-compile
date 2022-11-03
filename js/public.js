 
$(function() {
	const productInfo = {
		1 : {'title': '大膽追夢的你', 'img1': 'img/pro01-01.png', 'info1': '「熱情、活力」是你的專屬代名詞，在社交場合最活躍的康樂股長就是你！', 'info2': '單純無心機，同時對生活充滿熱情與勇氣，只要遇到想做的事，一定會盡力完成！', 'img2': 'img/pro01-02.png', 'tip1': '茉莉', 'tip2': '晨曦茉莉淡香精', 'img3':'img/pro01-03.png', 'tip3': '恬淨月光淡香精'},
		2 : {'title': '獨立自主的你', 'img1': 'img/pro02-01.png', 'info1': '「安靜、沉穩」是你的專屬代名詞，在朋友之中總是最細心照顧他人的暖心小天使！', 'info2': '內斂含蓄，擁有非常細膩的心思，照顧他人的同時其實也渴望被照顧！', 'img2': 'img/pro02-02.png', 'tip1': '佛手柑', 'tip2': '恬淨月光淡香精', 'img3':'img/pro02-03.png', 'tip3': '晨曦茉莉淡香精'},
		3 : {'title': '無拘無束的你', 'img1': 'img/pro03-01.png', 'info1': '「自由、不做作」是你的專屬代名詞，你的自信灑脫總是可以不經意感染身邊朋友！', 'info2': '愛好自由，擁有很多天馬行空的有趣想法，想到什麼就會馬上去做！', 'img2': 'img/pro03-02.png', 'tip1': '薰衣草', 'tip2': '自由微醺淡香精', 'img3':'img/pro03-03.png', 'tip3': '秘境天竺淡香精'},
		4 : {'title': '浪漫天真的你', 'img1': 'img/pro04-01.png', 'info1': '「自由、不做作」是你的專屬代名詞，你的自信灑脫總是可以不經意感染身邊朋友！', 'info2': '心軟、善良，看到朋友遇上困難，會犧牲自己去幫助別人，暖心的舉動也讓你成為好人緣代表！', 'img2': 'img/pro04-02.png', 'tip1': '玫瑰', 'tip2': '仙境玫瑰淡香精', 'img3':'img/pro04-03.png', 'tip3': '恬淨月光淡香精'},
		5 : {'title': '神秘迷人的你', 'img1': 'img/pro05-01.png', 'info1': '「神秘、不做作」是你的專屬代名詞，你就像一陣摸不透的風，不做作的個性更讓你特別有魅力！', 'info2': '成熟穩重，在聚會中屬於持久慢熱型，但只要和你長期相處，便會深深被你的穩重魅力吸引！', 'img2': 'img/pro05-02.png', 'tip1': '麝香', 'tip2': '秘境天竺淡香精', 'img3':'img/pro05-03.png', 'tip3': '自由微醺淡香精'},
	}
	
	function resultTemplet (product) {
		let {title, img1, info1, info2, img2, tip1, tip2, img3, tip3} = product;
		let templet = 
		`<div class="tb_result_item">
			<h2 class="fs_16 color_gb">隱藏的你是</h2>
			<h2 class="fs_40">${title}</h2>
			<div class="tb_product">
				<div class="tb_picture">
					<picture>
						<img src="${img1}" alt="">
					</picture>
				</div>
				<div class="tb_tips">
					<div class="tb_tip">
						<h3 class="tb_tip_title">朋友眼中的你</h3>
						<p class="tb_tip_info">${info1}</p>
					</div>
					<div class="tb_tip">
						<h3 class="tb_tip_title">真實的你</h3>
						<p class="tb_tip_info">${info2}</p>
					</div>
				</div>
			</div>
			<div class="tb_recommend">
				<div class="tb_recommend_content">
					<div class="tb_recommend_products">
						<div class="tb_recommend_product">
							<div class="tb_picture">
								<picture>
									<img src="${img2}" alt="">
								</picture>
							</div>
							<div class="tb_tips">
								<p>最適合你的<span class="tb_span_web_br"></span>香氛材料</p>
								<h3>${tip1}</h3>
								<h4>${tip2}</h4>
							</div>		
						</div>
						<div class="tb_recommend_product">
							<div class="tb_picture">
								<picture>
									<img src="${img3}" alt="">
								</picture>
							</div>
							<div class="tb_tips">
								<p>最適合你的<span class="tb_span_web_br">靈魂伴侶</span></p>
								<h3>${tip3}</h3>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>`
		return templet;
	}

	function findDuplicates(arr) {
		return arr.filter(function(currentValue, currentIndex){
			return arr.indexOf(currentValue) !== currentIndex;
		})
	 }
	
	$('.tb_items').slick({
		arrows: false,
		draggable: false,
		swipe: false,
		touchMove: false,
		infinite: false,
		responsive: [{
				breakpoint: 451,
				settings: {
					adaptiveHeight: true,
				}
		}]
	});
	
	$('#tb-1').click(function(){
		$('.tb_items').slick('slickGoTo', 1);
	})

	let products = [];

	$('#tb-q1').find('li').click(function() {
		products.push($(this).attr('data-productId'));
		$('.tb_items').slick('slickGoTo', 2);	
	})

	$('#tb-q2').find('li').click(function() {
		products.push($(this).attr('data-productId'));
		$('.tb_items').slick('slickGoTo', 3);	
	})

	$('#tb-q3').find('li').click(function() {
		products.push($(this).attr('data-productId'));

		let results = [...new Set(findDuplicates(products))];
		if(results.length === 0) {
			results = [...new Set(products.sort())];
		}
		
		results.map(function(item){
			let templet = resultTemplet(productInfo[item])
			$('.tb_result_content').append(templet);
		})

		if(results.length > 1) {
			$('.tb_box').addClass('longW');	
			$('.tb_result_content').addClass('p_3');
		}
		
		$('.tb_items').slick('slickGoTo', 4);	
		
	})

	$('#get, #share').click(function(){
		$('.tb_box').removeClass('longW');	
		$('.tb_result_content').empty()
		$('.tb_items').slick('slickGoTo', 5);		
	})


});
