import { c as create_ssr_component } from "./index2.js";
const WelcomeNavigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar is-fixed-top has-shadow" aria-label="main navigation"><div id="navbarBasicExample" class="navbar-menu m-auto"><div class="navbar-brand has-text-centered m-auto"><a href="/" class="is-size-2 navbar-item a-link-without-decoration has-text-weight-bold">FITTIFY</a></div>
		<div class="navbar-end m-auto"><div class="navbar-item"><div class="buttons"><button class="button is-link is-inverted is-rounded is-size-5"><a href="/login" class="columns is-variable is-size-4 a-link-without-decoration"><span class="icon column"><i class="fas fa-light fa-lock"></i></span>
							<p class="column">Login</p></a></button>
					<button class="button is-info is-rounded is-size-5"><a href="/signup" class="columns is-variable is-size-4 a-link-without-decoration"><p class="column has-text-white">Get Started</p></a></button></div></div></div></div></nav>`;
});
export {
  WelcomeNavigator as W
};
