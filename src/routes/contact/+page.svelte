<script>
    import Header from "../../components/header.svelte";
    export let data;
    
    let content = data.content
</script>

<Header />
<h2>Contact us</h2>

{@html content}