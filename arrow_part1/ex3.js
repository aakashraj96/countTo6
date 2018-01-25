// let inputs = process.argv.slice(2);
// let result = inputs.map(x => x[0]).reduce((prev,current) => prev+current,'');
// console.log(`[${inputs}] becomes "${result}"`);
function mapReduce()
{
	let inputs = Object.values(arguments);

	let result = inputs.map(x => x[0]).reduce((prev,current) => prev+current,'');
	console.log(`[${inputs}] becomes "${result}"`);
	return result;
}

module.exports =  mapReduce;
