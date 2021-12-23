<script>
	import { createEventDispatcher } from 'svelte';
	import COLORS from '../store/colors.js';

	const dispatch = createEventDispatcher();
  let showSelector = false;

	function onSelectColor(e) {
		showSelector = false;
		dispatch('add', {
			createdAt: Date.now(),
			color: e.target.attributes['data-color-idx'].value,
		});
	}
</script>


<div id="add-note">
	<div id="add-note-selector" class="{showSelector ? 'show' : 'hide'}">
		{#each COLORS as col, i}
			<button
				class="add-note-color"
				data-color-idx="{i}"
				style="background-color: {col}"
				on:click={onSelectColor}
			></button>
		{/each}
	</div>

	<button
		id="add-note-btn"
		on:click={() => showSelector = !showSelector}
	>
		<svg class={showSelector ? 'active' : ''} width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g><rect width="48" height="48" rx="12" fill="#E7E7E7" /></g>
			<g stroke="#4D4D4D" stroke-width="2" transform="translate(24 24)">
				<g id="cross">
					<line x1="-12" y1="0" x2="12" y2="0"/>
					<line x1="0"y1="-12" x2="0" y2="12"/>
				</g>
			</g>
		</svg>
	</button>
</div>


<style>
	#add-note {
		position: fixed;
		left: 0;
		bottom: 0;
		padding-bottom: 1rem;
		width: 100%;
	}

	#add-note-btn {
		display: block;
		margin: 0 auto;
		background-color: transparent;
		border: 0;
    cursor: pointer;
	}

	#add-note-btn #cross {
		transition: 100ms;
	}

	#add-note-btn .active #cross {
		transition: 100ms;
		transform: rotate(45deg);
	}

	#add-note-selector {
		display: flex;
		flex-wrap: wrap;
		margin: 0.75rem auto;
		width: 14rem;
		border-radius: 1rem;
		background-color: #000000;
	}

	#add-note-selector button {
		border: 0;
		cursor: pointer;
	}

  #add-note-selector.hide {
    display: none;
  }

	.add-note-color {
		width: 3rem;
		height: 3rem;
		margin: 0.25rem;
		flex-shrink: 0;
		border-radius: 0.5rem;
	}
</style>
