<script>
	import { page } from '$app/stores';
	export let data;
	export const { username } = data;
</script>

<svelte:head>
	<title>{$page.data.title || 'Codevolution'}</title>
</svelte:head>

{#if $page.data.notification}
	<p>{$page.data.notification}</p>
{/if}

<div>Welcome, {username}</div>
<slot />
