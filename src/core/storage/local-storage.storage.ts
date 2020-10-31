import { IBaseItem } from '../../types/core/IBaseItem.type';
import { IStorage } from '../../types/core/IStorage.type';


export class LocalStorageStorage<Item extends IBaseItem> implements IStorage<Item> {
    protected readonly dbName: string;

    constructor(dbName: string) {
        this.dbName = dbName;
    }

    public insert(data: Item | Item[]): Promise<void> {
        const items: Item[] = this.getItems();

        if (!Array.isArray(data)) {
            data = [data];
        }

        data.forEach((item: Item) => {
            item.id = items.length + 1;
            items.push(item);
        });

        this.setItems(items);

        return Promise.resolve();
    }

    public select(): Promise<Item[]> {
        const items: Item[] = this.getItems();
        return Promise.resolve(items);
    }

    public update(data: Item | Item[]): Promise<void> {
        const currentItems: Item[] = this.getItems();

        if (!Array.isArray(data)) {
            data = [data];
        }

        const mappedData: Map<number, Item> = data.reduce((map: Map<number, Item>, item: Item) => {
            map.set(item.id, item);
            return map;
        }, new Map());

        const updatedItems: Item[] = currentItems.map((item: Item) => {
            const dataItem: Item | undefined = mappedData.get(item.id);

            if (dataItem) {
                item = {
                    ...item,
                    ...dataItem,
                };
            }

            return item;
        });

        this.setItems(updatedItems);

        return Promise.resolve();
    }

    public delete(data: Item | Item[]): Promise<void> {
        const currentItems: Item[] = this.getItems();

        if (!Array.isArray(data)) {
            data = [data];
        }

        const ids: Set<number> = data.reduce((set: Set<number>, item: Item) => {
            set.add(item.id);
            return set;
        }, new Set());

        const updatedItems: Item[] = currentItems.filter((item: Item) => !ids.has(item.id));

        this.setItems(updatedItems);

        return Promise.resolve();
    }

    protected getItems(): Item[] {
        const data: string | null = localStorage.getItem(this.dbName);

        if (!data) {
            return [];
        }

        let items: Item[] | null = null;

        try {
            items = JSON.parse(data);
        } catch (error) {}

        return items || [];
    }

    protected setItems(items: Item[]): void {
        const data: string = JSON.stringify(items);
        localStorage.setItem(this.dbName, data);
    }

    protected mapItems(items: Item[] = this.getItems()): Map<number, Item> {
        return items.reduce((map: Map<number, Item>, item: Item) => {
            map.set(item.id, item);
            return map;
        }, new Map());
    }
}
