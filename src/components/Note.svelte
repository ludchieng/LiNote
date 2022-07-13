<script>

	import COLORS from '../store/colors';
	import { removeNote, setNote } from '../store/note';
  
  export let id;
  export let color;
  export let text;

  function saveContent(e) {
    setNote(id, e.target.innerText);
  }
</script>

<div class="masonry-element">
  <div
    class="note-controls"
    on:click={() => removeNote(id)}
  >
    &times;
  </div>
  <div
    class="note"
    style="background-color: {COLORS[color]}"
    contenteditable
    bind:textContent={text}
    on:blur={saveContent}
  >
  </div>
</div>


<style>
  [contenteditable]:focus {
    outline: 2px solid #087ce933;
  }

  .masonry-element {
		display: inline-block;
		-webkit-column-break-inside: avoid;
		page-break-inside: avoid;
		break-inside: avoid-column;
    margin-bottom: 0.6rem;
    width: 100%;
  }

  .note {
    padding: 0.5rem;
    line-height: 1.15rem;
    overflow-wrap: break-word;

    background-color: #992C46;
    border-radius: 0.5rem 0 0.5rem 0.5rem;
    box-shadow: 0 0.25rem 0 #fff1;
  }

  .note-controls {
    position: relative;
    width: 1.5rem;

    font-size: 1.2rem;
    text-align: center;
    margin-left: auto;

    background-color: #444;
    border-radius: 0.2rem 0.2rem 0 0;

    cursor: pointer;
  }
</style>
