interface IUser {
    user: {
        isAuthed: boolean;
        name: string;
        id: number;
        token: string;
    }
};

export default IUser;