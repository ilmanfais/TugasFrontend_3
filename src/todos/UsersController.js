import React from 'react';

// TODO - 2
// Import variabel users dari file users.js


const UsersController = () => {
    async () => {
        console.log(await formatUser())
        console.log(await findByName())
        console.log(await filterByMajor)
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
const formatUser = (dataUsers) => {

}

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = (name) => {

}


// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = (major) => {

}

export default UsersController;
