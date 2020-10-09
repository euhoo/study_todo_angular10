
export class LocalDataFactory {
  static getData<T>(key: string): T[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  static setData = <T>(key: string, data: T): void => {
    const strData = JSON.stringify(data);
    localStorage.setItem(key, strData);
  }
}
