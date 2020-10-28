// Интерфейс-абстракция для предоставления доступа к базе данных
// База данных может быть реализована любой сущностью будь то LocalStorage, IndexedDB, SQLite
// или же серверная база данных
interface IStorage<Item> {
    // Метод должен реализовать функционал добавления добавления сущности или сущностей в базу данных
    insert(item: Item | Item[]): Promise<void>;
    
    // Получение всех сущностей из базы данных
    select(): Promise<Item[]>;
    
    // Обновление одной или нескольких сущностей в базе данных
    update(item: Item | Item[]): Promise<void>;
  
    // Удаление указанных сущностей из базы данных
    delete(item: Item | Item[]): Promise<void>;
}

class LSStorage<Item> implements IStorage<Item> {
    private dbName: string;

    constructor(name: string) {
        this.dbName = name;
    }

    public insert(item: Item | Item[]): Promise<void> {
        return Promise.resolve();
    }

    public select(): Promise<any[]> {
        const itemsStr = localStorage.getItem(this.dbName);
        let items;

        try {
            items = JSON.parse(itemsStr);
        } catch (error) {
        }
            
        return Promise.resolve(items || []);
    }

    public size(): Promise<number> {
        return this.select()
            .then(result => result.length);
    }
}

interface BaseItem {
    id?: string | number;
}

interface User extends BaseItem {
    firstName: string;
    lastName: string;
    birthday: number;
}

interface Post extends BaseItem {
    title: string;
    text: string;
    created: string;
}

const posts = new LSStorage<Post>('posts');
const users = new LSStorage<User>('users');

users.insert({
    firstName: '',
});
