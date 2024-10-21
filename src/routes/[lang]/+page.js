// export async function load({ params, fetch }) {
//   let lang = { params } 

//   const baseUrl = "https://cdn.umbraco.io/content";
//   const headers = {
//     "Accept-Language": lang,
//     "umb-project-alias": "test-hc-preview-issue",
//   };

//   const data = await fetch(
//     `${baseUrl}/df535aba-d59d-4186-ad39-206f29244bc9/children`,
//     { headers }
//   );
//   const dataJson = await data.json();
//   const navigation = dataJson._embedded.content;
//   const navUrls = navigation.map((page) => {
//     // console.log(page)
//     // @ts-ignore
//     return {
//       name: page.name,
//       url: page._url,
//     };
//   });

//   console.log(params);

//   return { navUrls, lang};
// }