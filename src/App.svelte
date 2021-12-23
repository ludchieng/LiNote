<script>
	import Note from './components/Note.svelte';
	import NoteAdder from './components/NoteAdder.svelte';
	import notes, { addNote } from './store/store';

	function onAddNote(e) {
		addNote(e.detail.createdAt, e.detail.color);
	}
</script>


<main class="masonry">
	{#each $notes as note (note.id)}
		<Note {...note} />
	{/each}
</main>

<NoteAdder on:add={onAddNote} />


<style>
	.masonry {
		-webkit-columns: 10rem 16;
		-moz-columns: 10rem 16;
		columns: 10rem 16;
		column-gap: 0.6rem;
		padding-left: 0;
		font-size: 0.95rem;
	}
</style>
