<script>
	export let data;
	const product = data.product;
	const title = data.title;
</script>

<h1>{title}</h1>
<div>
	<h2>{product.title} - ${product.price}</h2>
	<p>{product.description}</p>
	<hr />
</div>

