<script>
	export let data;
</script>

<span>Most Active Stock - {data.mostActiveStock.symbol} {data.mostActiveStock.price}</span>
<span>Top Gaining Stock - {data.topGainingStock.symbol}</span>
<span>Top Losing Stock - {data.topLosingStock.symbol}</span>

<slot />

<style>
	span {
		margin-right: 30px;
		font-size: 24px;
	}
</style>
