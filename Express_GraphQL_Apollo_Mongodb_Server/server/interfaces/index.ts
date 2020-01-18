/*
 Basic Interface for every mongoose fetched object
*/
interface IMongoose<T> {
    _doc: T;
    id: string;
}

/*
 User Interface
*/
interface IUser {
    _id: string;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

/*
 Add more interfaces here
*/

export { IUser };
export default IMongoose;
