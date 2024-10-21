export async function load({ params, fetch }) {
  console.log("loading")
    let { lang } = params

    const baseUrl = "https://cdn.umbraco.io/content"
    const headers = {
        "Accept-Language": lang,
        "umb-project-alias": "test-hc-preview-issue",
        "Content-Type": "application/json"
    }
   
    // const data = await fetch(`${baseUrl}/df535aba-d59d-4186-ad39-206f29244bc9/children`, {headers})
    // const dataJson = await data.json()
    // const navigation = dataJson._embedded.content
    // const navUrls = navigation.map(page => {
    //     // console.log(page._url.slice(5))
    //     // @ts-ignore
    //     return {
    //         name: page.name,
    //         url: page._url,
    //     }
    // })
    console.log("params:", params)

    const dataContent = await fetch(`${baseUrl}/df535aba-d59d-4186-ad39-206f29244bc9`, {headers})
    const dataContentJson = await dataContent.json()
    const content = {
        homeWelcome: dataContentJson.welcome,
        homeBody: dataContentJson.homeBody,
        homeUrl: dataContentJson._url
    }
    console.log("content: ", content)

    // console.log("the obj:", navUrls)
    return {lang, content }
    
}


const myObj = {
    "id": "df535aba-d59d-4186-ad39-206f29244bc9",
    "_totalItems": 2,
    "_totalPages": 1,
    "_page": 1,
    "_pageSize": 10,
    "_links": {
      "self": {
        "href": "https://cdn.umbraco.io/content/df535aba-d59d-4186-ad39-206f29244bc9/children?page=1&pageSize=10"
      },
      "page": {
        "href": "https://cdn.umbraco.io/content/{id}/children{?contentType,page,pageSize}",
        "templated": true
      },
      "root": {
        "href": "https://cdn.umbraco.io/content{?contentType}",
        "templated": true
      },
      "content": [
        {
          "href": "https://cdn.umbraco.io/content/2c9ce956-df08-45a6-a4d5-34bb397d2ecc"
        },
        {
          "href": "https://cdn.umbraco.io/content/5903f716-6e0f-483f-8c23-abec5209d8b4"
        }
      ]
    },
    "_embedded": {
      "content": [
        {
          "_creatorName": "André Larsen",
          "_url": "/home/contact/",
          "_writerName": "André Larsen",
          "_urls": {
            "da": "/hjem/kontakt/",
            "de": "/heim/kontakt/",
            "en": "/home/contact/",
            "en-us": "/home/contact/"
          },
          "contentTypeAlias": "contentPage",
          "_hasChildren": false,
          "_level": 2,
          "name": "Contact",
          "parentId": "df535aba-d59d-4186-ad39-206f29244bc9",
          "sortOrder": 0,
          "_createDate": "2024-10-17T14:43:14.323Z",
          "_id": "2c9ce956-df08-45a6-a4d5-34bb397d2ecc",
          "_updateDate": "2024-10-18T07:54:18.980Z",
          "_links": {
            "self": {
              "href": "https://cdn.umbraco.io/content/2c9ce956-df08-45a6-a4d5-34bb397d2ecc"
            },
            "ancestors": {
              "href": "https://cdn.umbraco.io/content/2c9ce956-df08-45a6-a4d5-34bb397d2ecc/ancestors"
            },
            "url": {
              "href": "https://cdn.umbraco.io/content/url?url=%2Fhome%2Fcontact%2F"
            },
            "children": {
              "href": "https://cdn.umbraco.io/content/2c9ce956-df08-45a6-a4d5-34bb397d2ecc/children"
            },
            "descendants": {
              "href": "https://cdn.umbraco.io/content/2c9ce956-df08-45a6-a4d5-34bb397d2ecc/descendants"
            },
            "root": {
              "href": "https://cdn.umbraco.io/content{?contentType}",
              "templated": true
            },
            "parent": {
              "href": "https://cdn.umbraco.io/content/df535aba-d59d-4186-ad39-206f29244bc9"
            }
          },
          "contentBody": "<p>Contact us by reaching out</p>"
        },
        {
          "_creatorName": "André Larsen",
          "_url": "/home/about/",
          "_writerName": "André Larsen",
          "_urls": {
            "da": "/hjem/om-os/",
            "de": "/heim/um/",
            "en": "/home/about/",
            "en-us": "/home/about/"
          },
          "contentTypeAlias": "contentPage",
          "_hasChildren": false,
          "_level": 2,
          "name": "About",
          "parentId": "df535aba-d59d-4186-ad39-206f29244bc9",
          "sortOrder": 1,
          "_createDate": "2024-10-17T14:43:24.237Z",
          "_id": "5903f716-6e0f-483f-8c23-abec5209d8b4",
          "_updateDate": "2024-10-18T07:54:03.177Z",
          "_links": {
            "self": {
              "href": "https://cdn.umbraco.io/content/5903f716-6e0f-483f-8c23-abec5209d8b4"
            },
            "ancestors": {
              "href": "https://cdn.umbraco.io/content/5903f716-6e0f-483f-8c23-abec5209d8b4/ancestors"
            },
            "url": {
              "href": "https://cdn.umbraco.io/content/url?url=%2Fhome%2Fabout%2F"
            },
            "children": {
              "href": "https://cdn.umbraco.io/content/5903f716-6e0f-483f-8c23-abec5209d8b4/children"
            },
            "descendants": {
              "href": "https://cdn.umbraco.io/content/5903f716-6e0f-483f-8c23-abec5209d8b4/descendants"
            },
            "root": {
              "href": "https://cdn.umbraco.io/content{?contentType}",
              "templated": true
            },
            "parent": {
              "href": "https://cdn.umbraco.io/content/df535aba-d59d-4186-ad39-206f29244bc9"
            }
          },
          "contentBody": "<p>What we do is extraordinary!</p>"
        }
      ]
    }
  }