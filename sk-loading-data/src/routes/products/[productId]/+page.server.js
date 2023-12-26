import { error, redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { productId } = params;
	if (productId > 3 && productId < 7) {
		throw new error(404, {
			message: 'Oh no! Looks like the product is currently unavailable.',
			hint: 'Try a different product'
		});
	} else if (productId > 7) {
		throw redirect(307, '/products');
	}
	const title = 'Product Details';
	const notification = 'End of season sale! 50% off!';
	const response = await fetch(`http://localhost:4000/products/${productId}`);
	const product = await response.json();
	return {
		title,
		product,
		notification
	};
};

export const prerender = 'auto';
