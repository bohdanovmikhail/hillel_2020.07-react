export class LSStorage<Item> {
    protected dbName: string;

    constructor(dbName: string) {
        this.dbName = dbName;
    }

    public insert(data: Item | Item[]): Promise<void> {
        const items: Item[] = this.getItems();

        if (!Array.isArray(data)) {
            data = [data];
        }

        data.forEach((item: any) => {
            item.id = items.length + 1;
            items.push(item);
        });

        this.setItems(items);

        return Promise.resolve();
    }

    public select(): Promise<Item[]> {
        const items = this.getItems();
        return Promise.resolve(items);
    }

    protected getItems(): Item[] {
        const data = localStorage.getItem(this.dbName);
        let items: Item[];

        try {
            items = JSON.parse(data);
        } catch (error) {}

        return items || [];
    }

    protected setItems(items: Item[]): void {
        const data = JSON.stringify(items);
        localStorage.setItem(this.dbName, data);
    }
}

// localStorage.clear();
const users = new LSStorage('users');

users.insert({});
users.insert([{}, {}, {}]);

class A {
    constructor() {}

    method1() {
        console.log(123);
    }

    method2() {
        console.log('hello');
    }
}

const a = new A();

a.method1();
a.method2();
