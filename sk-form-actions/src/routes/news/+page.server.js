import { DB_USER, DB_PASS } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { secretKey } from '$lib/server/secrets';

export const load = ({ cookies, url }) => {
	console.log(`Secret key ${secretKey}`);
	console.log(`Connecting to database with username ${DB_USER} and password ${DB_PASS}`);
	if (!cookies.get('username')) {
		throw redirect(307, `/auth?redirectTo=${url.pathname}`);
	}
	const newsAPIKey = 'YOUR_NEWS_API_KEY';
	console.log(newsAPIKey);
	/** Make API call using API key to fetch news data */
	const news = [
		{ id: 1, title: 'News 1' },
		{ id: 2, title: 'News 2' },
		{ id: 3, title: 'News 3' }
	];

	return { news };
};
