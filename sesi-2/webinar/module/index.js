const users = [];

function getUser() {
  console.log(users);
}

const addUser = function (inputId, inputName, inputEmail, inputPassword) {
  let user = {
    id: inputId,
    name: inputName,
    email: inputEmail,
    password: inputPassword,
  };
  users.push(user);
  console.log('Berhasil Menambahkan user');
  console.log(user);
};

const updateUser = (inputId, inputName, inputEmail) => {
  let index = users.findIndex((item) => item.id == inputId);

  if (index >= 0) {
    let user = users[index];
    user.name = inputName;
    user.emai = inputEmail;

    console.log(`Berhasil update data user`);
    console.log(users[index]);
  } else {
    console.log(`id user tidak ditemukan`);
  }
};

const deleteUser = (inputId) => {
  let index = users.findIndex((item) => item.id == inputId);

  if (index >= 0) {
    users.splice(index, 1);
    console.log('berhasil menghapus user');
  } else {
    console.log('User tidak ditemukan');
  }
};

addUser(1, 'Andika', 'dika@gmail.com', 'pass1234');
addUser(2, 'Rovi', 'rovi@gmail.com', 'pass1234');

getUser();
