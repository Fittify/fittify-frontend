<script>
	import '../app.css';
	import WelcomeNavigator from "../lib/WelcomeNavigator.svelte";
</script>

<WelcomeNavigator />

<section class="columns is-vcentered is-full is-centered background-home-image">
	<div class="column is-three-fifths hero is-fullheight is-centered">
		<div class="hero-body is-centered has-text-centered">
			<div class="container has-text-centered">
				<p class="is-size-1 has-text-white has-text-weight-bold">
					FITTIFY
				</p>
				<p class="subtitle is-size-3 has-text-white">
					Are you looking for a partner for your favorite sport activity in Regensburg?
				</p>
				<div class="columns is-centered">
					<div class="column is-three-fifths is-centered">
						<a href="/signup" class="a-link-without-decoration">
							<button class="button is-info is-rounded is-fullwidth is-size-5">
								<p class="column has-text-white is-size-4">Sign up!</p>
							</button>
						</a>
					</div>
				</div>
				<div class="columns is-centered">
					<div class="column is-half is-centered">
						<p class="is-size-5 has-text-white black-background">Or if you already have an account - 
							<a class="white-font-on-hover" href="/login">sign in</a>!
						</p>
					</div>
				</div>
			</div>	
		</div>
	</div>
</section>
