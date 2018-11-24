async function registerUser(email, password) {
  if (!email || !password) throw new Error("email and password are required");

  let requestBody = { email, password };

  await fetch("/auth/register", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(requestBody)
  })
  .then(res => {
    if (!res.ok) throw new Error(res.json()["error"]);
    return res.json();
  })
  .then(obj => {
    console.log(obj)
    this.setState({ redirectToLogin: true });
    return obj;
  })
  .catch(err => {
    this.setState({ fetchError: true });
    console.error(err);
  });
};

export default registerUser;