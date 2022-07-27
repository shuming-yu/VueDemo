## 相關資源

### HomePage : https://shuming-yu.github.io/VueDemo/dist/#/
### Page : https://shuming-yu.github.io/VueDemo/dist/#/login

## 更改 dist 路徑

- .gitignore 檔案將 /dist 刪除後 (dist檔案就可 push 到 git 上)

- vue.config.js -> add publicPath: '/VueDemo/dist'

- npm run build  ->  產生 dist 檔案  ->  首先可測試開啟 dist 內的 index.html (無資訊,F12跳錯誤)

- 確認 dist 檔案下 -> index.html 內的檔案路徑更改為 /VueDemo/dist/js