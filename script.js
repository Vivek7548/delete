// Function to save user details to local storage
function saveUserDetails() {
    // Get user input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Create user object
    const user = {
        username: username,
        email: email
    };

    // Check if local storage already has user data
    let usersData = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user data to the array of users
    usersData.push(user);

    // Store the updated array of users in local storage
    localStorage.setItem('users', JSON.stringify(usersData));

    // Clear the input fields for the next entry
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';

    // Display users in the UI
    displayUsers();
}

// Function to display users in the UI
function displayUsers() {
    const userList = document.getElementById('user-list');

    // Get user data from local storage
    let usersData = JSON.parse(localStorage.getItem('users')) || [];

    // Clear the user list before adding updated users
    userList.innerHTML = '';

    // Add users to the UI
    usersData.forEach(function (user, index) {
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;

        // Add delete button to each user entry
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            // Remove user from local storage
            usersData.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(usersData));

            // Remove user from the UI
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        userList.appendChild(listItem);
    });
}

// Display users when the page loads
displayUsers();
