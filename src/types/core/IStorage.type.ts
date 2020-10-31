import { IBaseItem } from './IBaseItem.type';


export interface IStorage<Item extends IBaseItem> {
    insert(item: Item | Item[]): Promise<void>;
    select(): Promise<Item[]>;
    update(item: Item | Item[]): Promise<void>;
    delete(item: Item | Item[]): Promise<void>;
}
