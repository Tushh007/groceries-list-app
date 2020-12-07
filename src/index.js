let userList = ['user1', 'user2', 'user3']
let currentUser = ''

document.querySelector("#search-user").addEventListener("input", (e) => {
  currentUser = e.target.value;
});

document.querySelector("#login").addEventListener("click", () => {
  const user = userList.find((user) => user === currentUser);
  if (user) {
    location.assign(`/home.html#${user}`);
  } else {
    console.log('user not found')
  }
  
});
