import { ApiService } from './apiService';
import { UserCard } from './userCard';
import { FilterService } from './filterService';
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', async () => {
    const users = await ApiService.fetchUsers();
    const userCardsContainer = document.getElementById('user-cards-container');
    const filterInput = document.getElementById('filter-input');

    const renderCards = (filteredUsers) => {
        userCardsContainer.innerHTML = '';

        if (filteredUsers.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'Users not found.';
            userCardsContainer.appendChild(message);
            return;
        }

        filteredUsers.forEach(user => {
            const card = new UserCard(user).createCard();
            userCardsContainer.appendChild(card);
        });
    };

    renderCards(users);

    filterInput.addEventListener('input', () => {
        const filteredUsers = FilterService.filterUsers(users, filterInput.value);
        renderCards(filteredUsers);
    });
});
