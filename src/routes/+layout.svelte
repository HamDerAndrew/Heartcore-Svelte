<script lang="ts">
    import Header from "../components/header.svelte";
    export let data;

    let navUrls = data.navUrls;
    let content = data.content.homeUrl
    // console.log(navUrls)
</script>

<style>
    #content-container {
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
    }

    footer {
        background-color: purple;
        color: white;
        padding: 10px 0 10px 0;
    }

    .content-space {
        padding:0 20px 0 20px;
    }
</style>

<div id="content-container">
    <header class="content-space">
        <nav>
            <ul>
                <li>
                    <a href={content}>Home</a>
                </li>
                {#each navUrls as navUrl}
                    <li>
                        <a href={Object.values(navUrl)[1]}>
                            {navUrl[Object.keys(navUrl)[0]]}
                        </a> 
                    </li>
                {/each}
            </ul>
        </nav>
    </header>

    <div class="content content-space">
        <slot></slot>
    </div>

    <footer class="content-space">
        this is a footer
    </footer>
</div>