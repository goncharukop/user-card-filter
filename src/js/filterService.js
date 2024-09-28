export class FilterService {
    static filterUsers(users, query) {
        return users.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.username.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase()) ||
            user.phone.toLowerCase().includes(query.toLowerCase()) ||
            user.website.toLowerCase().includes(query.toLowerCase()) ||
            user.company.name.toLowerCase().includes(query.toLowerCase()) ||
            user.company.catchPhrase.toLowerCase().includes(query.toLowerCase()) ||
            user.company.bs.toLowerCase().includes(query.toLowerCase()) ||
            user.address.city.toLowerCase().includes(query.toLowerCase()) ||
            user.address.street.toLowerCase().includes(query.toLowerCase()) ||
            user.address.suite.toLowerCase().includes(query.toLowerCase()) ||
            user.address.geo.lat.toLowerCase().includes(query.toLowerCase()) ||
            user.address.geo.lng.toLowerCase().includes(query.toLowerCase())
        );
    }
}
