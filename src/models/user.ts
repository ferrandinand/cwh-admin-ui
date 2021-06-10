
export class User {
    constructor(
        public id = 0,
        public name = '',
        public last_name = '',
        public email = '',
        public role = 'admin',
    ) {
    }

    get setName() {
        return this.name + ' ' + this.last_name;
    }
}