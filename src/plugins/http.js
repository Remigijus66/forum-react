export const get = async (url) => {
  const res = await fetch("http://localhost:4001/" + url)
  return await res.json()
}

export const post = async (url, data) => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data),
    credentials: 'include'
  }

  const res = await fetch("http://localhost:4001/" + url, options)
  return await res.json()
}

export const addMessageCount = async (name) => {
  console.log('adding message count to ', name)
  const res = await post('addMessageCounter', { name: name })
  console.log(res)
}




// export const timeDistance = (date1, date2) => {
//   if (date1 <= date2) {
//     return 'closed'
//   } else {
//     let distance = (date1 - date2);
//     const hours = Math.floor(distance / 3600000);
//     distance -= hours * 3600000;
//     const minutes = Math.floor(distance / 60000);
//     distance -= minutes * 60000;
//     const seconds = Math.floor(distance / 1000);
//     return `${hours}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
//   }
// };

// export const checksesssion = async () => {
//   const data = { name: 'any' }
//   const res = await post('checksesssion', data)
//   console.log(res)
//   return res
// }