import { LocalStorageStorage } from '../core/storage/local-storage.storage';
import { IUser } from '../types/entities/IUser.type';


export const UsersAPI = new LocalStorageStorage<IUser>('users');
