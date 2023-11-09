import React from 'react';

// TODO - 2
// Import variabel users dari file users.js
import users from './users';


const UsersController = () => {
    async () => {
        console.log(await formatUser())
        console.log(await findByName())
        console.log(await filterByMajor())
    }
    return (
        <div>
            <h3>Cek hasilnya pada konsole</h3>
        </div>
    );
}

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const formatUser = async () => {
    const userNames = users.map((user) => user.name);
    console.log(userNames);
  }

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = async (name) => {
    const user = users.find((user) => user.name === name);
    console.log(user);
  }


// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = async (major) => {
    const filterMajor = users.filter((user) => user.major === major);
    console.log(filterMajor);
  }

export default UsersController;