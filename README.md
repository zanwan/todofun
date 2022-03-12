# todoFun 抽個好玩的事

![](https://github.com/cybershota/imagebed/blob/main/todoFUN-192.png)

經典 todo list 練習的改作。使用 React 框架與 Framer motion 製作可隨機抽籤待辦事項的應用，讓 todo list 更有趣！

- [Live Demo](https://zanwan.github.io/todofun/#/)

## 待辦抽籤系統

- 新增 / 修改 / 刪除待辦事項
- 隨機抽出待辦事項
- 顯示所有待辦事項
- 分類顯示已為成 / 未完成待辦事項
- 刪除所有待辦事項
- 離線使用應用
- PWA

![](https://github.com/cybershota/imagebed/blob/main/todofun_mobile.gif)

## 使用技術

- 前端
  - React, React Hooks 使用 Create React App PWA Template
  - React Router 設定路由
  - Styled component 製作 UI 元件
  - Framer motion 製作 UI 動畫
  - Dexie.js 操作 IndexedDB 資料庫
  - gh-pages 部署於 Github page
- 設計
  - Framer 設計初始可互動設計元件
  - Figma 設計圖樣

## 製作心得

使用 Framer 設計 Web app 一直是我的夢想，這次終於能用 React 來好好玩一番了！Framer 與 Figma 這兩款設計軟體的著力點不一樣，Framer 可以在設計的同時撰寫 React Component ，設計稿元件即是可互動元件庫，讓 Mockup 更加真實且與工程師溝通更順暢。自己使用的感想是，先用 Figma Layout 出排版佈局，再用 Framer 撰寫互動元件，似乎不錯的個人開發流程，讓自己確切思考應用的使用情境，設計的同時撰寫程式碼，我覺得對最終專案結構的簡潔與維護是相當有幫助的。

另外這次為了嘗試 PWA，探究了 IndexedDB 一番，瀏覽器中真的藏好多寶藏！多虧 Dexie 的包裝讓操作瀏覽器資料庫非常方便。專案目前的結果讓我好開心，希望可以再回頭設計 UI 與更深入了解 Framer motion，讓這個專案更加成熟。
