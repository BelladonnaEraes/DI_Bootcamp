export const MOVIE_DETAIL = 'MOVIE_DETAIL'
export const USERS_DETAIL = 'USERS_DETAIL'

export const detail = (movie) => {
  return {
    type:MOVIE_DETAIL,
    payload:movie
  }
}

export const getUsers = () => (dispatch, store) =>  {
  console.log("store=>", store().users );
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {

    dispatch({type:USERS_DETAIL,payload:data})

  })
  .catch(e => {
    console.log(e);
  })
}
