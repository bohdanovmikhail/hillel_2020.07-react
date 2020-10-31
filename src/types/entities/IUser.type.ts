import { IBaseItem } from '../core/IBaseItem.type';


export interface IUser extends IBaseItem {
    firstName: string;
    lastName?: string;
}
