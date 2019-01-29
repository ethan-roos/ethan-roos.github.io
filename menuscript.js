//this script gets included in all pages which use the standard menu

		//menu line generator
		//initalise data array
		var menudata = [];
		//line flat
		var lf = 5;
		//line buldge;
		var lb = 3;

		//make page appropriate data
		function setMenuData(page){

			var menuxvals = [-9, -6.4,-5.4,-4.4, 5,6,7, 22.5,23.5,24.5, 32,33,34, 38.5];
			var aboutvals = [lf, lf,lb,lf, lf,lf,lf, lf,lf,lf, lf,lf,lf, lf];
			var botvals = [lf, lf,lf,lf, lf,lb,lf, lf,lf,lf, lf,lf,lf, lf];
			var dvisvals = [lf, lf,lf,lf, lf,lf,lf, lf,lb,lf, lf,lf,lf, lf];
			var othervals = [lf, lf,lf,lf, lf,lf,lf, lf,lf,lf, lf,lb,lf, lf];

			var menuyvals = [];
			switch (page) {
				case 'about':
						menuyvals = aboutvals;
						break;
				case 'botanical-illustrations':
						menuyvals = botvals;
						break;
				case 'data-visualisations':
						menuyvals = dvisvals;
						break;
				case 'other-work':
						menuyvals = othervals;
						break;
					}
			//menudata[0]="test";
			for(i= 0; i < 14; i++){
				menudata[i]={x: menuxvals[i], y: menuyvals[i]};
				}
			//console.log(menudata);
		}

			var height = 30;
			var width = 350;
/*
			var y = d3.scaleLinear()
					.domain([lb,lf+1])
					.range([height, 0]);
			var x = d3.scaleLinear()
					.domain([0,28])
					.range([0,width]);
					*/
			var y = d3.scaleLinear()
					.domain([lb,7])
					.range([height, 0]);
			var x = d3.scaleLinear()
					.domain([-9,38.5])
					.range([0,width]);

			//apend svg to menu div
			var svg = d3.select("#menSelect").append("svg")
				.attr("xmlns","http://www.w3.org/2000/svg" )
				.attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
				.attr("version", "1.1")
				.attr("height","100%")
				.attr("width","100%")
				.attr("class","men-line")
				.attr("viewBox", "0 0 350 33");

			//append links
			//var menuxvals = [0, 4,5,6, 10,11,12, 16,17,18, 22,23,24, 28];
			svg.append("a")
					.attr("xlink:href","about.html")
					.attr("onmouseout", "menHover(pagename)")
					.attr("onmouseover","menHover('about')")
					.append("text")
						.text("About")
						.attr("x", x(-7))
						.attr("y", y(6));
			svg.append("a")
					.attr("xlink:href","botanical-illustrations.html")
					.attr("onmouseout", "menHover(pagename)")
					.attr("onmouseover","menHover('botanical-illustrations')")
					.append("text")
						.text("Botanical Illustrations")
						.attr("x", x(0))
						.attr("y", y(6));
			svg.append("a")
					.attr("xlink:href","data-visualisations.html")
					.attr("onmouseout", "menHover(pagename)")
					.attr("onmouseover","menHover('data-visualisations')")
					.append("text")
						.text("Data Visualisations")
						.attr("x", x(17))
						.attr("y", y(6));
			svg.append("a")
					.attr("xlink:href","blog.html")
					.attr("onmouseout", "menHover(pagename)")
					.attr("onmouseover","menHover('other-work')")
					.append("text")
						.text("Blog")
						.attr("x", x(31.5))
						.attr("y", y(6));

			var chartGroup = svg.append("g"); //add transform/translate later

			//path generator
			var line = d3.line()
					.x(function(d){ return x(d.x); })
					.y(function(d){return y(d.y); });
			//append path
			function drawMenLine(){
			chartGroup.append("path").attr("class","men-line").attr("d", line(menudata));
		}

		// get page name
		//var pagename = 'about';
		//make data object
		setMenuData(pagename);
		drawMenLine();

		function menHover(link){
			setMenuData(link);
			d3.select("path.men-line")
					.transition()
							.duration(350)
							.attr("d",line(menudata));
		}


	//	menuLine("about")
		//resize so menu stays centred

		/*
		resizeFunction();
		function resizeFunction(){
			var vpHight = window.inneHeight;
			var vpWidth = window.innerWidth;

			// dynamic posistioning of the Name box at the center of the page (horizontally)
			var nb = document.getElementsByClassName('gen-men')[0];
			var nbWidth = nb.offsetWidth;
			var nbPos = vpWidth / 2 - nbWidth/2;
			nb.style.marginLeft = nbPos+"px";
		}
		*/
		function generalResize(){
			// gen men

			if (window.innerWidth < 1112 && window.innerWidth >= 539){
				var newWidth = ((-40/539)*window.innerWidth +82.523) + 60;
				d3.select('#getGenMen')
					.style("width", String(newWidth)+"%")
					.style("margin-left",String((100-newWidth)/2)+"%");
			}else if (window.innerWidth < 539) {
				d3.select('#getGenMen')
					.style("width", "100%")
					.style("margin-left","0%");

			}else{
				d3.select('#getGenMen')
					.style("margin-left","auto");
			}

		}
