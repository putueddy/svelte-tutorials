export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const mostActiveStockResponse = await fetch('http://localhost:4000/most-active-stock');
	const topGainingStockResponse = await fetch('http://localhost:4000/top-gaining-stock');
	const topLosingStockResponse = await fetch('http://localhost:4000/top-losing-stock');

	return {
		mostActiveStock: await mostActiveStockResponse.json(),
		topGainingStock: await topGainingStockResponse.json(),
		topLosingStock: await topLosingStockResponse.json()
	};
};
