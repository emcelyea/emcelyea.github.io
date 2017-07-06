window.planetHierarchy = {};
planetHierarchy.init = function(planetData, graphId){

	var graphElement = document.getElementById(graphId);
	var margin = 10;
	var width  = graphElement.offsetWidth;
	var height = graphElement.offsetHeight;
	var nodeRadius = width/20;
	var maxDepth = 1;
	//location that all planets start draw at prior to transform
	var spawnX = width/2;
	var spawnY = height + nodeRadius;

	var svg	= d3.select('#graph-area')
						.append('svg')
						.attr('height', height)
						.attr('width', width)
						.style('background-color', 'black');

	var g = svg.append('g')
						.attr('height', height-margin)
						.attr('width', width - margin)
						.attr('transform', 'translate(' + margin + ',' + margin + ')');	

	var planets = [
		{planet: "Mercury", color: "#A17F5D"},
		{planet: "Venus",  color: "#E89624"},
		{planet: "Earth", color: "#518E87"},
		{planet: "Mars",  color: "#964120"},
		{planet: "Jupiter",  color: "#F8800F"},
		{planet: "Saturn",  color: "#E0B463"},
		{planet: "Uranus",  color: "#D1E3F4"},
		{planet: "Neptune",  color: "#515CA8"}
	];
	addPlanetGradients();
	addBackgroundStarTwinklers(50);

	//draw variables
	var planetElements;	//store d3 selection
	var depth = 0;			//keep track transform heights
	drawPlanet();
	
	function drawPlanet(){
		//first draw call, draw all elements in tree, 
		//position elements beyond root below screen
		if(!planetElements){
			var treemap = d3.tree().size([width, height]);
			var data = treemap(d3.hierarchy(planetData));
			planetElements = g.selectAll('.node')
			.data(data.descendants())
			.enter().append('g')
			.attr('transform', function(d){
				return "translate(" + spawnX + "," + spawnY + ")";
			});

	    planetElements.append("circle")
	  	.attr("r", nodeRadius)
	    .attr("class", function(d) { 
	      return "node";
	    })
	    .attr('fill', function(){
	    	return 'url(#gradient-' + planets[Math.floor(Math.random() * planets.length)].planet + ')'
	    })
	    .attr('id', function(d,i){
	    	return 'planet'+ d.depth + i;
	    })		
				
			planetElements.on("click", clickPlanet)
  
	 	}

	 	//transition planets at a certain depth with active parent 
		planetElements.transition()
			.duration(400)
			.attr("transform", function(d){
				if(d.depth <= depth && (d.depth === 0 || d.parent.active)){
	      	return "translate(" + d.x + "," + planetYPosition(height, d.depth, depth)  + ")" + 
	      	"scale(" + planetScale(d.depth, depth) + ")"; 
	      }else {
	      	return 'translate(' + spawnX + ',' + spawnY + ')';
	      }
	    });	 
	  planetElements.append("text")
		  .attr("dy", ".35em")
		  .attr("y", function(d) { return planetYPosition(height, d.depth, depth) - nodeRadius*2; })
		  .style("text-anchor", "middle")
		  .attr('class', "node-text")
		  .text(function(d) { return d.data.name; }); 
	}

	function planetYPosition(height, depth, maxDepth){
		if(depth === 0){
			return nodeRadius;
		}else if(maxDepth === 1 && depth === 1){
			return height/2;
		}else if(maxDepth > 1){
			var tempDepth = depth+1;
			var tempMax = maxDepth + 1;
			return (height * 2/3) * (tempDepth/tempMax);	
		}
	}

	function planetScale(depth, maxDepth){
		if(maxDepth === 0){
			return 1;
		}else if( maxDepth > 0){
			var tempDepth = depth+1;
			var tempMax = maxDepth + 1;
			return (tempDepth/tempMax);
		}
	}


	function setNodesDepth(parent){
		if(parent && parent.depth){
			if(parent.children && parent.children.length > 0){
				for(var i = 0; i < parent.children.length; i++){
					parent.children[i].depth = parent.depth + 1; 
				}
				maxDepth = parent.depth + 1;
			}
		}else{
			parent.depth = 1;
		}
	}

	function clickPlanet(planet, elem, elems){
		// onclick animation
		d3.select('#' + elems[elem].childNodes[0].id).transition()
			.duration(200)
			.attr('r', nodeRadius * 1.1)
			.transition()
			.duration(200)
			.attr('r', nodeRadius);
		if(!planet.active){
			if(planet.depth+1 > depth){
				depth = planet.depth+1;
			}
		}else if(planet.active){
			depth = planet.depth;
		}
		planet.active = !planet.active;
		drawPlanet();
	}


	//draw stars onto black background
  function addBackgroundStarTwinklers(count){
  	var bigStarD = "M 6.000 8.000 L 9.527 10.854 L 7.902 6.618 L 11.706 4.146 L 7.176 4.382 L 6.000 0.000 L 4.824 4.382 L 0.294 4.146 L 4.098 6.618 L 2.473 10.854 L 6.000 8.000";
    var lilStarD = "M 6.000 8.000 L 8.351 9.236 L 7.902 6.618 L 9.804 4.764 L 7.176 4.382 L 6.000 2.000 L 4.824 4.382 L 2.196 4.764 L 4.098 6.618 L 3.649 9.236 L 6.000 8.000";
    var tinyStarD = "M 6.000 7.000 L 8.000 6.000 L 6.000 5.000 L 4.000 6.000 L 6.000 7.000";

    var bigStars = count * 0.15;
    var lilStars = count * 0.3;
    var tinyStars = count * 0.55;
    var starData = [];

    for(let i = 0; i < bigStars; i++){
    	starData.push({ d:bigStarD, 
    								  translate:{ x:Math.floor(Math.random() * width),
    								  						y:Math.floor(Math.random() * height)
    								  					},
    								 	twinkle:( (Math.random() * 10) > 6) })
    }
    for(let i = 0; i < lilStars; i++){
    	starData.push({ d:lilStarD, 
    								  translate:{ x:Math.floor(Math.random() * width),
    								  						y:Math.floor(Math.random() * height)
    								  					},
    								  twinkle:( (Math.random() * 10) > 8) })
    }
    for(let i = 0; i < tinyStars; i++){
    	starData.push({ d:tinyStarD, 
    								  translate:{ x:Math.floor(Math.random() * width),
    								  						y:Math.floor(Math.random() * height)
    								  					},
    								  twinkle:( (Math.random() * 10) > 8) })
    }    

    var stars = g.selectAll('.stars')
    						 .data(starData)
    						 .enter()
    						 .append('path')
    						 .attr('class', function(d){
    						 	if(d.twinkle){
    						 		return 'stars star-twinkle';
    						 	}else{
    						 		return 'stars';
    						 	}
    						 })
    						 .attr('d', function(d){
    						 	return d.d;
    						 })
								 .attr('transform', function(d){
								 	return 'translate(' + d.translate.x + ',' + d.translate.y + ')'
								 });	
  }

  //load the <def> tags for planet gradients
	function addPlanetGradients(){

		var gradientRadial = svg.append("defs").selectAll("radialGradient")
		.data(planets)
		.enter().append("radialGradient")
		.attr("id", function(d){ return "gradient-" + d.planet; })
		.attr("cx", "30%")
		.attr("cy", "30%")
		.attr("r", "70%");
		  
		//Append the color stops
		gradientRadial.append("stop")
			.attr("offset", "0%")
			.attr("stop-color", function(d) { return d3.rgb(d.color).brighter(1); });
		gradientRadial.append("stop")
			.attr("offset", "50%")
			.attr("stop-color", function(d) { return d.color; });
		gradientRadial.append("stop")
			.attr("offset",  "100%")
			.attr("stop-color", function(d) { return d3.rgb(d.color).darker(1.5); });
		//lazy spinning implementation
		gradientRadial.append("animate")
			.attr("attributeName", "cx")
			.attr('dur', '2500ms')
			.attr('from', '-40%')
			.attr('to', '160%')
			.attr('repeatCount','indefinite')
		gradientRadial.append("animate")
			.attr('dur', '2500ms')
			.attr('attributeName', 'r')
			.attr('from', '55%')
			.attr('to', '65%')
			.attr('repeatCount','indefinite')
	}
	/*States of node on click
	function drawPlanet(planet){
		if(!planet[0].x || !planet[0].y || !planet[0].depth){
			planet[0].x = width / 2;
			planet[0].y = margin + nodeRadius;
			planet[0].depth = 0;
		}
		var node = g.selectAll('.node')
		.data(planet)
		.enter().append('g')
		.attr('transform', function(d){
			return "translate(" + spawnX + "," + spawnY + ")";
		})
		.on("click", clickPlanet)

 	
    node.transition()
    .duration(400)
    .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y  + ")"; })

		// adds the circle to the node
		node.append("circle")
  	.attr("r", nodeRadius)
    .attr("class", function(d) { 
      return "node";
    })
    .attr('fill', function(){
    	return 'url(#gradient-' + planets[Math.floor(Math.random() * planets.length)].planet + ')'
    })
    .attr('id', function(d,i){
    	return 'planet'+ d.depth + i;
    })
/*  	.attr('id', function(d, index){
  		return 'nodeId' +index; 
  	})

  	var link = g.selectAll('.link')
  							.data(nodes.descendants().slice(1))
							 	.enter().append("path")
						    .attr("class", "link")
						    .attr("d", function(d) {
						       return "M" + d.x + "," + (d.y + nodeRadius);});
		link.transition()
		.duration(200)
		.attr('d', function(d){ 
			return "M" + d.x + "," + (d.y + nodeRadius) 
     + "C" + d.x + "," + (d.y + d.parent.y) / 2
     + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
     + " " + d.parent.x + "," + (d.parent.y+nodeRadius/2);
   });
  	
  	node.append('text')
  	.attr('dy', '.5em')
  	.style('text-anchor', 'middle')
  	.attr('class', 'node-text')

  	.text(function(d){
  		return d.data.name
  	})
  	.attr('x', function(d, count, elem){
  		return 0 - Math.floor(elem[count].getBoundingClientRect().width/2 + nodeRadius + 5);
  	})
	}*/
}