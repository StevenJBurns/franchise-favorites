

async function registerUser(email, password) {
  if (!email || !password) throw new Error("email and password are required");

  let requestBody = { email, password };

  fetch("/auth/register", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(requestBody)
  })
  .then((res) => console.log(res))
  .catch(err => console.error(err));
};

export default authenticateUser;