import Dexie from 'dexie';

// 設定 indexedDB 資料庫
export const db = new Dexie('todoFunDB');
// 創建 DB 儲存庫
db.version(1).stores({ todo: '++id,uuid,title,content,done,time' });
db.open().catch((err) => {
  console.log(err);
});
