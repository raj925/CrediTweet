
    var frequency_list = [{"text":"ban","size":40},{"text":"Hawaii","size":30},{"text":"Muslim","size":20},{"text":"revised","size":15},{"text":"sue","size":10},{"text":"impeach","size":15},{"text":"Russia","size":30},{"text":"scandal","size":15},{"text":"tremendous","size":15},{"text":"Trump","size":85},{"text":"tourists","size":25},{"text":"admin","size":15},{"text":"refugees","size":15},{"text":"travel","size":45},{"text":"impact","size":30}];

    var color = d3.scale.linear()
            .domain([0,1,2,3,4,5,6,10,15,20,100])
            .range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);

    d3.layout.cloud().size([1200, 300])
            .words(frequency_list)
            .rotate(0)
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
            .start();

    function draw(words) {
        d3.select("svg").attr("class", "wordcloud")
                .append("g")
                .attr("transform", "translate(400,850)")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) { return d.size + "px"; })
                .style("fill", function(d, i) { return color(i); })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.text; });
    }