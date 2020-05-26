export const LocalStorageUtils = {
    getItem: (name: string) => {
        return localStorage.getItem(name) !== null ? JSON.parse(localStorage.getItem(name) as any) : {}
    },
    setItem: (name: string, data: any) => {
        return localStorage.setItem(name, JSON.stringify(data));
    },
    removeItem: (name: string) => {
        return localStorage.removeItem(name);
    }
}
