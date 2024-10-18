<script lang="ts">
    import Header from "../components/header.svelte";

    export let data;

    let home = data.content
</script>

<Header/>

<h1>{home.homeWelcome}</h1>
<div>{@html home.homeBody}</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>