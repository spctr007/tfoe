export class Member {
    id: number | undefined;
    name: string = "";
    email: string = "";
    position: string = "";
    status: string = "";
    date_joined: string = "";
    role: string = "";
    photo: string = "";

    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.email) this.email = initializer.email;
        if (initializer.position)
            this.position = initializer.position;
        if (initializer.status)
            this.status = initializer.status;
        if (initializer.date_joined) this.date_joined = initializer.date_joined;
        if (initializer.role) this.role = initializer.role;
        if (initializer.photo) this.photo = initializer.photo;
    }
}
