<script lang="ts">
    import LanguageSelector from '../../components/language-dropdown.svelte'; // Adjust path if necessary
    export let data;

    $: content = data.content
    let lang = data.lang; // The current language

    // console.log(navUrls)
</script>

<style>
    /* #content-container {
        height:100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    ul {
        display: flex;
        padding: 0;
    }

    li{
        list-style: none;
        margin-right: 10px;
    } */

    footer {
        background-color: purple;
        color: white;
        padding: 10px 0 10px 0;
    }

    .content-space {
        padding:0 20px 0 20px;
    }
</style>

<header>
    <nav>
        <!-- Global navigation (fetched from Umbraco Heartcore) -->
        <!-- {#each data.globalContent.items as item}
            <a href={item.url}>{item.name}</a>
        {/each} -->
    </nav>

    <!-- Add the language selector -->
    <LanguageSelector {lang} />
</header>
<div>
    <h1>{content.homeWelcome}</h1>
    <div>
        {@html content.homeBody}
    </div>
    <div class="content content-space">
        <slot></slot>
    </div>

    <footer class="content-space">
        this is a footer
    </footer>
</div>