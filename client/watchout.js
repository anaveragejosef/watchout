// start slingin' some d3 here.

// Design enemies
// Create a data element that will define the enemies
var enemyData = [
  {
    xAxis: (Math.floor(Math.random() * 100)),
    yAxis: (Math.floor(Math.random() * 100)),
    radius: 10
  },
  {
    xAxis: (Math.floor(Math.random() * 100)),
    yAxis: (Math.floor(Math.random() * 100)),
    radius: 10
  },
  {
    xAxis: (Math.floor(Math.random() * 100)),
    yAxis: (Math.floor(Math.random() * 100)),
    radius: 10
  }
];
// Select all circles
d3.select('svg').selectAll('circle')
  .data(enemyData) // Call the data
  .enter() // Enter for the creation of new items
  .append('circle')
  .attr('cx', function(d) { return d.xAxis; }) // Add x-axis
  .attr('cy', function(d) { return d.yAxis; })// Add y-axis
  .attr('r', function(d) { return d.radius; })// Add radius
  .style('fill', 'black'); // Add fill