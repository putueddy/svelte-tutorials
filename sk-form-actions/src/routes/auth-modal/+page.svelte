<script>
	export let form;
</script>

<form method="post" action="/auth?/login">
	<p>{form?.message || ''}</p>
	<input type="text" name="username" placeholder="username" value={form?.username ?? ''} />
	<input type="password" name="password" placeholder="password" />
	<button type="submit">Login</button>
	<button formaction="/auth?/register">Register</button>
</form>
