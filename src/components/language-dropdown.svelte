<script>
    import { goto } from '$app/navigation';
    import { invalidate } from '$app/navigation';

    export let lang; // The current language passed from +layout or +page

    // List of available languages (these should match your Umbraco Heartcore languages)
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'da', name: 'Danish' },
        { code: 'de', name: 'German' },
        { code: 'en-US', name: 'English (United States)' }
    ];

    // Function to change the language
    async function changeLanguage(selectedLang) {
        // Update the URL to match the selected language
        await goto(`/${selectedLang}`);
        
        // Invalidate the current data so it gets reloaded in the new language
        await invalidate(''); // This ensures the load() function is re-run and data is refetched
    }
</script>

<!-- Dropdown for selecting a language -->
<select bind:value={lang} on:change={() => changeLanguage(lang)}>
    {#each languages as language}
        <option value={language.code} selected={language.code === lang}>{language.name}</option>
    {/each}
</select>

<style>
    select {
        padding: 5px;
        border-radius: 4px;
    }
</style>
