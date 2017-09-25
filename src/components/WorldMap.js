import * as d3 from 'd3'
import * as topojson from 'topojson'
// import { geoMercator, geoPath } from 'd3-geo'

export default function renderWorldMap(handleClick){

	 var width = 960,
          height = 1160;

      var svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height);


      d3.json("world.json", function(error, world) {
        if (error) return console.error(error);
        console.log(world);



        var subunits = topojson.feature(world, world.objects.subunits);
        var projection = d3.geoMercator()
            .scale(150)
            .translate([width / 2, height / 2]);

        var path = d3.geoPath()

        // was geo.path()
                  .projection(projection);

        svg.append("path")
          .datum(subunits)
          .attr("d", path);

        svg.selectAll(".subunit")
          .data(topojson.feature(world, world.objects.subunits).features)
          .enter().append("path")
          .attr("class", function(d) { return "subunit " + d.id; })
          .attr("d", path);

        svg.append("path")
          .datum(topojson.mesh(world, world.objects.subunits, function(a, b) { return a !== b }))
          .attr("d", path)
          .attr("class", "subunit-boundary");

        svg.selectAll(".subunit-label")
          .data(topojson.feature(world, world.objects.subunits).features)
          .enter().append("text")
          .attr("class", function(d) { return "subunit-label " + d.id; })
          .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
          .attr("dy", ".35em")
          .text(function(d) { return d.properties.name; });

         d3.selectAll(".subunit")
          .on("mouseover", function(event){
              console.log(event.id, "on mouseover")
              const countryCode = event.id
              svg.select(".subunit-label." + countryCode).style("display", "block")
          })
          .on("mouseout", function(){
              d3.selectAll(".subunit-label")
                .style("display", "none")
          })
          .on("click", function(){ handleClick() });


    });

}