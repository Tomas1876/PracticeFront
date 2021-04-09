

$(function(){
		
		//매출순위 TOP3
		let	numbers = [0,0,0];
		
		let number;
		
		// 매출순위 담을 배열
		let ranks = [];
		
		//검색한 결과 중 테이블에 출력할 정보를 담을 배열
		let movies = [];
		
		$("#search").click(function(){
			
			let movieAPI = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
						
			let data = {key:"f5eef3421c602c6cb7ea224104795888", targetDt:$("#date").val().replace("-","").replace("-","")}
					
			console.log(data);
			
			//document.getElementById("titlearea").innerHTML = $("#date").val() + " 영화 순위";
			
			
			// 비동기 방식으로 JASON 객체의 정보를 불러온다
			$.getJSON(movieAPI,data,function(data,textStatus,xhr){
				console.log("이하 데이터");
				console.log(data);
				//console.log(textStatus);
				//console.log(xhr.readyState);
				
					let table = document.getElementById("table");
					$("#table").empty();
					$("#table").append("<tr><th>RANK</th><th>Title</th><th>Releas</th><th>Audience</th></tr>");
				
        			$.each(data.boxOfficeResult.dailyBoxOfficeList,function(index,obj){
       					
        					console.log(obj.rank + "/" + obj.movieNm + "/" + obj.openDt +"/"+obj.audiCnt);
        						
        						$('#table').append('<tr><td>' +obj.rank +'</td><td>' +obj.movieNm +'</td><td>'
    								+obj.openDt +'</td><td>' +obj.audiCnt +"명" +'</td></tr>');
        						
        						movies.push([obj.rank, obj.movieNm, obj.openDt, obj.audiCnt]);
        						
        						console.log(obj.salesShare);
        						number = parseInt(obj.salesShare);
        						console.log(number);
        						
        						
        						ranks.push(number);

        						console.log("랭크스");
        						console.log(ranks);
        						
      							

        					console.log("퍼스트");
        					console.log(numbers);
        			});
        			
        			$.each(numbers,function(index,item){
							numbers[index] = ranks[index];
						});	
        			
        			
        			console.log(movies);
        			
        			
        			$("#chartaera").css("display","block");
        			
        			// 차트
        			const chartdata = {
        					  labels: [
        					    movies[0][1],
        					    movies[1][1],
        					    movies[2][1]
        					  ],
        					  
        					  datasets: [{
        					    label: '일간 매출 TOP3',
        					    data: [numbers[0], numbers[1], numbers[2]],
        					    backgroundColor: [
        					      'rgb(255, 99, 132)',
        					      'rgb(54, 162, 235)',
        					      'rgb(255, 205, 86)'
        					    ],
        					    hoverOffset: 4
        					  }]
        					};

        			var ctx = document.getElementById('myChart').getContext('2d');
        			var myChart = new Chart(ctx, {
        				 type: 'pie',
        				  data: chartdata,
        			    options: {
        			        scales: {
        			            y: {
        			                beginAtZero: true
        			            }
        			        }
        			    }
        			});

			});
						
		});
		

		
	});