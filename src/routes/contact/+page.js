export async function load() {
    const baseUrl = "https://cdn.umbraco.io/content"
    const headers = {
        "Accept-Language": "en-US",
        "umb-project-alias": "test-hc-preview-issue"
    }
   
    const data = await fetch(`${baseUrl}/2c9ce956-df08-45a6-a4d5-34bb397d2ecc`, {headers})
    const dataJson = await data.json()
    console.log(dataJson)
    return {
        content: dataJson.contentBody
    }
    
    // const navigation = dataJson._embedded.content
    // const navUrls = navigation.map(page => {
    //     // console.log(page._url.slice(5))
    //     // @ts-ignore
    //     return {
    //         name: page.name,
    //         url: page._url.slice(5),
    //     }
    // })
}