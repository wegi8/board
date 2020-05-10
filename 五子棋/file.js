$(function() {
	// 原始棋盘数组
	const arr = [];
	// 落子计数器
	let typeIndex = 0,
		whiteCount = 0,
		blackCount = 0;

	function arrList() {
		for (let i = 0; i < 20; i++) {
			arr[i] = []
			for (let j = 0; j < 20; j++) {
				arr[i].push({
					y: j,
					type: ""
				})
			}
		}
	}



	function renderBorad(arr) {
		let str = '';
		arr.forEach((item, i) => {
			item.forEach(e => {
				str += '<div class="board" data-x="' + i + '" data-y="' + e.y + '" data-type="' + e.type + '"></div>'
			})
		})
		$('#checkerBoard').html(str)
	}


	arrList();
	renderBorad(arr);

	$('.board').click(function(eve) {
		const {
			x,
			y,
			type
		} = eve.target.dataset;
		if (!type) {
			whiteCount = 0, blackCount = 0;
			$(this).html(typeIndex % 2 == 0 ? '白' : '黑')
			eve.target.dataset.type = typeIndex % 2 == 0 ? '白' : '黑'
			arr[x][y].type = typeIndex % 2 == 0 ? '白' : '黑',
				typeIndex++;
			slash(eve.target.dataset)
		}
	})

	function slash(item) {
		let {
			x,
			y,
			type
		} = item
		let sla = {
			minx: Number(x) - 4,
			miny: Number(y) - 4,
			maxx: Number(x) + 4,
			maxy: Number(y) + 4
		}
		for (let j = x; j <= sla.maxx; j++) {
			for (let i = y; i <= sla.maxy; i++) {
				if (type == arr[j][i]['type']) {
					type == '白' ? whiteCount++ : blackCount++,
					console.log('111',whiteCount);
				}
				else break
			}
		}
		for (let j = x; j >= sla.minx; j--) {
			for (let i = y; i >= sla.miny; i--) {
				if (type == arr[j][i]['type']) {
					debugger
					type == '白' ? whiteCount++ : blackCount++,
					console.log('222',whiteCount);
				}
				else break
			}
		}
		winner(type)
	}
	
	function winner(type){
		if (whiteCount == 5 || blackCount == 5) alert(type + '方获胜')
	}
})
