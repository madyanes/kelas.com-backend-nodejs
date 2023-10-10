/*
    1. Buat fungsi untuk login sederhana: 
    - parameternya masukkan email dan password
    - cocokkan data sesuai dengan email dan psassword yang di berikan / input
    - bila terdapat data yang salama pada arraya maka tampilkan di console : "Selamat datang `nama user`"
    - bila tidak ada data yang cocok pada array maka tampilkan di console : "email dan password tidak cocok"

    2. buat function crud untuk object task dengan properti sebagai berikut : 
        - id
        - user_id
        - title
        - is_done (boolean)
*/

/**
 * Task 1 - Login
 */

const users = [
  {
    email: 'asep@gmail.com',
    password: 'abc123',
  },
  {
    email: 'siti@gmail.com',
    password: 'password',
  },
];

function login(email, password) {
  for (const user of users) {
    if (user.email === email && user.password === password) {
      console.log(`Selamat datang ${user.email}`);
      return;
    }
  }
  console.log('Email dan password tidak cocok');
}

/**
 * Task 2 - CRUD Tasks
 */

const tasks = [
  {
    id: 1,
    userId: 1,
    title: 'Belajar Algoritma',
    isDone: false,
  },
];

function getTasks() {
  console.log('Tasks', tasks);
}

function addTask(userId, title, isDone) {
  const task = {
    id: +new Date(),
    userId,
    title,
    isDone,
  };
  tasks.push(task);
  console.log('Berhasil menambahkan task');
}

function updateTask(id, title, isDone) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index >= 0) {
    tasks[index].title = title;
    tasks[index].isDone = isDone;
    console.log('Berhasil update task');
    console.log(tasks[index]);
  } else {
    console.log('Task tidak ditemukan');
  }
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index >= 0) {
    tasks.splice(index, 1);
    console.log('Berhasil menghapus task');
  } else {
    console.log('Task tidak ditemukan');
  }
}
