const getGreetingFromApi = () => {
  fetch(`http://localhost:3000/api/greeting`)
    .then(res => res.json)
    .catch(error => console.log(error))
}

export default getGreetingFromApi;