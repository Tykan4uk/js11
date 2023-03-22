class UserService {
  static getAllUsers = async () => {
    const response = await fetch(`https://dummyjson.com/users`);

    const result = this.#checkResult(response);

    return result;
  }

  static getAllUsersWithError = async () => {
    const response = await fetch(`https://dummyjson.com/uses`);

    const result = this.#checkResult(response);

    return result;
  }

  static getUserById = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);

    const result = this.#checkResult(response);

    return result;
  }

  static searchUsers = async (name) => {
    const url = new URL(`https://dummyjson.com/users/search`);
    url.searchParams.set(`q`, name);

    const response = await fetch(url);

    const result = this.#checkResult(response);

    return result;
  }

  static filterUsers = async (key, value) => {
    const url = new URL(`https://dummyjson.com/users/filter`);
    url.searchParams.set(`key`, key);
    url.searchParams.set(`value`, value);

    const response = await fetch(url);

    const result = this.#checkResult(response);

    return result;
  }

  static getPaginatedUsers = async (limit, skip, select) => {
    const url = new URL(`https://dummyjson.com/users`);
    url.searchParams.set(`limit`, limit);
    url.searchParams.set(`skip`, skip);
    url.searchParams.set(`select`, select);

    const response = await fetch(url);

    const result = this.#checkResult(response);

    return result;
  }

  static getUserCarts = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}/carts`);

    const result = this.#checkResult(response);

    return result;
  }

  static getUserPosts = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}/posts`);

    const result = this.#checkResult(response);

    return result;
  }

  static getUserTodos = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}/todos`);

    const result = this.#checkResult(response);

    return result;
  }

  static addUser = async (user) => {
    const response = await fetch(`https://dummyjson.com/users/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    const result = this.#checkResult(response);

    return result;
  }

  static updateUser = async (id, user) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    const result = this.#checkResult(response);

    return result;
  }

  static deleteUser = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
      method: 'DELETE'
    });

    const result = this.#checkResult(response);

    return result;
  }

  static #checkResult = async (response) =>
    response.ok
      ? await response.json()
      : { status: response.status, message: await response.text() };
}

UserService.getAllUsers().then(data => {
  console.log('Get all users:');
  console.log(data)
});

UserService.getAllUsersWithError().then(data => {
  console.log('Get all users (exception):');
  console.log(data)
});

UserService.getUserById(3).then(data => {
  console.log('Get user by id=3:');
  console.log(data)
});

UserService.searchUsers(`John`).then(data => {
  console.log('Get users with name John:');
  console.log(data)
});

UserService.filterUsers(`hair.color`, `Brown`).then(data => {
  console.log('Filter users by hair color - Brown:');
  console.log(data)
});

UserService.getPaginatedUsers(5, 10, `firstName,age`).then(data => {
  console.log('Get paginated users (page 3, take 5):');
  console.log(data)
});

UserService.getUserCarts(5).then(data => {
  console.log('Get user carts (id=5):');
  console.log(data)
});

UserService.getUserPosts(5).then(data => {
  console.log('Get user posts (id=5):');
  console.log(data)
});

UserService.getUserTodos(5).then(data => {
  console.log('Get user todos (id=5):');
  console.log(data)
});

UserService.addUser({
  firstName: 'Muhammad',
  lastName: 'Ovi',
  age: 250
}).then(data => {
  console.log('Add user:');
  console.log(data)
});

UserService.updateUser(3, {
  firstName: 'Muhammad',
  lastName: 'Ovi',
  age: 250
}).then(data => {
  console.log('Update user with id=3:');
  console.log(data)
});

UserService.deleteUser(5).then(data => {
  console.log('Delete user with id=5:');
  console.log(data)
});