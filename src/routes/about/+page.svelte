<script>
    import Header from "../../components/header.svelte";
    export let data;
    
    let content = data.content
    console.log(data)

</script>
<Header />
<h2>About our product</h2>
{@html content}