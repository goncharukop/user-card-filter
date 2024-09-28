export class UserCard {
    constructor(user) {
        this.user = user;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('user-card');

        card.innerHTML = `
            <h3 style="text-align: center">${this.user.name}</h3>
            <p><b>User name:</b> ${this.user.username}</p>
            <p><b>Email:</b> ${this.user.email}</p>
            <p><b>Phone:</b> ${this.user.phone}</p>
            <p><b>Website:</b> ${this.user.website}</p>

            <h4 style="text-align: center">Company</h4>
            <p><b>Company name:</b> ${this.user.company.name}</p>
            <p><b>Catch phrase:</b> ${this.user.company.catchPhrase}</p>
            <p><b>BS:</b> ${this.user.company.bs}</p>

            <h4 style="text-align: center">Address</h4>
            <p><b>City:</b> ${this.user.address.city}</p>
            <p><b>Street:</b> ${this.user.address.street}</p>
            <p><b>Suite:</b> ${this.user.address.suite}</p>
            <p><b>Geo lat:</b> ${this.user.address.geo.lat}</p>
            <p><b>Geo lng:</b> ${this.user.address.geo.lng}</p>
        `;

        return card;
    }
}
