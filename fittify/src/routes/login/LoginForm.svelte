<script>
	import { goto } from "$app/navigation";
	import { accountService } from "../../services/account-service";

	let username = "";
	let password = "";
	let errorMessage = "";

	async function login() {
		let success = await accountService.login(username, password);
		if (success) {
			goto("/lobbies");
		} else {
			username = "";
			password = "";
			errorMessage = "Invalid Credentials";
		}
	}
</script>

<form on:submit|preventDefault={login}>
	<div class="field is-size-3">
		<label class="label is-size-5" for="username">Username</label>
		<input bind:value={username} class="input is-size-6 is-rounded" id="username" name="username" placeholder="Enter username" type="text" />
	</div>
	<div class="field">
		<label class="label is-size-5" for="password">Password</label>
		<input bind:value={password} class="input is-size-6 is-rounded" id="password" name="password" placeholder="Enter Password" type="password" />
	</div>
	<div class="field">
		<button class="button is-link is-size-5 is-rounded">Log In</button>
	</div>
</form>
{#if errorMessage}
	<div class="section">
		{errorMessage}
	</div>
{/if}
