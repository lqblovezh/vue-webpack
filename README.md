# JavaScript Library

## ES Module

* core-decorators (修饰器)
* babel-polyfill (较旧浏览器原生接口兼容库)
* es5-shim (IE 下 ES5 特性支持)
* esdoc (ES 代码的文档生成工具)
* depd (用于标记废弃的属性或方法)
* require-uncached (引入模块，但不缓存此模块)

## JavaScript Utils

### Object
* camelcase-keys (将对象的键转换为驼峰式命名)
* merge (合并数据对象)
* omit-empty (忽略空值)

### Array
* dedupe (数组去重)
* array-flatten (数组扁平化)

### Date
* moment (时间处理工具)
* dayjs (时间处理工具，轻量)
* ms (格式化毫秒数)
* time-stamp (格式化当前时间戳)

### String
* pad (字符填充)
* randomatic (随机生成字符串)
* upper-case-first (首字母大写)
* fast-chunk-string (按长度拆分字符串)
* diff (内容差异比较)
* jschardet (根据内容检测字符集)
* pretty-bytes (格式化字节大小)
* url-join (连接地址路径)
* jsesc (将数据转换为安全字符串形式)

### Promise
* pify (将回调方式转换返回 Promise，类似于 util.promisify)
* delay (延时函数)
* p-queue (用于执行密集型任务的队列，[更多](https://github.com/sindresorhus/promise-fun))

### Encryption/Hash
* crypto-js (加密函数库)
* md5 (消息摘要算法)
* sha1 (安全哈希算法)
* object-hash (数据对象的摘要算法)
* uuid (生成唯一标识符)
* js-base64 (基于 64 个字符的编码方式)

### JSON/XML
* jsonpath (JSON 数据查询)
* normalizr (JSON 数据扁平化)
* sax (XML 解析工具)
* xmldom (XML 解析工具)
* xml-escape (XML 实体字符编码)
* xml-formatter (XML 格式化工具)
* xml-js (XML 转换为 JSON)

### Validator
* joi (对象验证工具)
* ajv (JSON 验证工具)
* password-validator (密码规则验证器)
* validator (内容格式验证器)

## Node Utils

### OS, Memory and Interface
* systeminformation (系统信息)
* cron (任务定时器之一)
* node-schedule (任务定时器之一)
* pretty-hrtime (高精度时间格式化工具)
* lru-cache (缓存管理模块)
* execa (执行系统命令)
* node-notifier (桌面提醒工具)
* path-key (获取不同平台环境变量中的 PATH 键名)
* clipboardy (访问系统剪切板)
* open (在浏览器中打开指定的地址)
* wiring-pi (用于树莓派的 GPIO 操作工具)
* parse-node-version (解析 Node 版本)

### FS
* memory-fs (虚拟文件系统)
* readdirp (递归读取指定目录的中文件)
* fs-extra (文件系统接口扩展包之一)
* fs-extra-promise (文件系统接口扩展包之一)
* then-fs (返回 Promise 的文件系统接口)
* chokidar (文件侦听工具)
* renamer (文件批量重命名)
* mime （根据扩展名获取文件类型）
* file-type (根据文件内容获取文件类型)
* del (批量删除工具，可过滤文件)
* make-dir (创建目录，通过 Promise 返回结果，类似于 mkdir -p)
* mkdirp (创建目录，通过回调返回结果，类似于 mkdir -p)
* rimraf (删除目录，类似于 rm -rf)
* cpx (复制文件，期间可侦听文件，转换文件内容)
* load-json-file (读取 JSON 内容的文件)
* find-up (往上查找文件或目录)
* read-pkg-up (往上获取 package.json)
* file-extension (扩展名另类解析)
* unixify (将 Windows 风格的路径转换为 Unix 风格的路径)
* minimatch (文件名匹配函数)
* base64-img (图片的 Base64 编码和解码)
* adm-zip (Zip 文件操作工具)
* parse-torrent (解析 torrent 文件)
* parse-passwd (解析 /etc/passwd 文件的内容)
* tempy (在临时文件夹中，随机生成一个的文件或目录)
* temp (临时文件管理模块)
* trash (把文件移动到回收站)

### NPM
* nrm (npm 镜像源切换工具)
* yrm (yarn 镜像源切换工具)
* update-check (查检包是否有新版本)
* latest-version (获取包的最新版本)
* package-json (获取包在 NPM 的注册信息)
* npm-run-all (执行多个脚本)
* better-npm-run (脚本运行器，可配置环境变量)
* cross-env (执行脚本时，设置特定的环境变量)
* semver (语义化版本号)
* semver-compare (语义化版本比较函数)

### CLI
* yargs (命令选项制定工具之一)
* commander (命令选项制定工具之一)
* inquirer (命令行交互式操作工具)
* shelljs (跨平台的 Shell 命令工具)
* chalk (终端字符串美化工具)
* cli-color (终端字符串格式化工具)
* stdin (侦听输入内容)
* listr (终端任务列表)
* log-update (打印可更新文本)
* ora (打印一个类似于动态的加载图标和信息)
* qrcode-terminal (打印二维码)
* boxen (将文本打印到一个矩形框)

### Media and Graphics
* fluent-ffmpeg (ffmpeg 软件库)
* gm (GraphicsMagick 软件库)
* canvas (Canvas 接口支持库)
* chromatism (色彩处理工具)
* color (颜色格式转换工具)

### Document or Code
* docx4js (Word 处理工具)
* exceljs (Excel 处理工具)
* marked (Markdown 处理工具)
* markserv (Markdown 渲染服务程序)
* markdown-toc (解析 Markdown 大纲)
* mermaid (根据纯文本配置生成图表或流程图)
* mermaid.cli (mermaid 的命令行工具)
* jison (语法分析解析器)

### GIT and SVN
* ignore (.gitignore 的过滤规则)
* husky (设置 GIT 钩子)
* commitizen (规范化提交信息)
* cz-emoji (带有表情的提交信息规范化插件)
* simple-git (GIT 软件库)
* git-repo-info (获取 GIT 本地库信息)
* node-svn-ultimate (SVN 软件库)

### Server and Net
* brotli (基于 LZ77 算法的压缩库)
* content-disposition (创建或解析响应头信息 Content-Disposition)
* content-type (创建或解析头信息 Content-Type)
* header-case-normalizer (头信息字段规范化)
* accepts (解析请求头信息 Accepts)
* charset (从 Content-Type 中获取字符集)
* thrift (一种接口描述语言)
* ip (获取本机地址信息)
* portfinder (本机端口扫描器)
* is-port-reachable (检查指定端口是否被占用)
* http-proxy-middleware (服务代理中间件)
* vhost (根据域名执行中间件)
* access-control (跨域访问控制)
* acl (用户访问控制)
* serve-static (静态文件服务中间件)
* serve-handler (静态文件服务工具)
* busboy (上传文件解析器)
* express-xml-bodyparser (解析 XML 格式的请求体)
* express-async-errors (将请求回调转换为异步函数)
* sockjs (Socket 服务端)
* socks (SOCKS 客户端)
* socks5server (SOCKS 服务端)
* nodemailer (E-Mail 发送工具)
* proxy-agent (HTTP 请求代理设置)
* node-localstorage (模拟浏览器中的 localStore)

### DB
* graphql (GraphQL 软件库)
* lowdb (基于 JSON 的小数据库)
* sequelize (数据库操作工具)

### HTML DOM
* phantom (虚拟浏览器)
* jsdom (HTML DOM 解析器)
* cheerio (节点访问工具，类似 jQuery 语法)

### Test and Log
* node-inspector (Node 调试工具)
* callsites (返回调用文件链)
* mocha (可扩展的 JS 测试框架)
* bunyan (基于 JSON 的日志库)
* nock (拦截 Node 的 HTTP 请求，并模拟响应)
* apidoc (请求接口文档生成工具)

### Isomorphic/Polyfill
* isomorphic-fetch (fetch 兼容库)
* path-to-regexp (路径参数解析工具)
* wayfarer (路由分发器)
* mockjs (数据模拟工具)
* express-useragent (UserAgent 解析工具)
* browser-or-node (环境检查工具)
* cookie (序列化或反序列化 Cookie 格式的内容)
* qs (序列化或反序列化 URL 参数)
* url-parse (URL 解析器，类似于 url.parse)
* path-parse (文件路径解析，类似于 path.parse)
* qrcode (二维码生成工具)

## Browser Utils

### BOM
* detect-browser (检测浏览器的信息)
* copy-to-clipboard (复制到粘贴板)
* history (会话历史接口)
* idb-keyval (基于 IndexedDB 的键值存储)
* comlink (WebWorker 操作接口)
* sockjs-client (Socket 客户端)
* mobx-persist (状态持久化)
* localforage (异步存储库)
* howler (音频接口)
* better-scroll (移动端滚动插件)
* swiper (移动端滑动插件)
* scrollreveal (滚动动态展示插件)
* pointer-tracker (跟踪鼠标或手指的轨迹)
* prismjs (语法高亮转换工具)
* highcharts (图表插件)
* fetch-mock (拦截 fetch 请求，并返回 Mock 数据)
* computed-style (返回计算之后的样式值)
* stage-js (2D 游戏引擎)

### DOM
* ent (HTML 实体字符处理工具)
* classlist (元素样式选择器控制工具)
* classnames (样式选择器连接函数)
* load-script (动态加载脚本文件)
* load-css-file (加载样式文件)
* insert-css (插入页级样式)
* jss (CSS 编译器，以样式表为单位)
* emotion (CSS 编译器，以样式块为单位)
* style-attr (CSS 解析器)
* css-select (样式选择器搜索引擎)
* form-serialize (表单字段序列化工具)
* popper.js (浮动提示插件)
* purecss (Pure 样式库)
* animate.css (动画样式库)

### Virtual DOM
* virtual-dom (虚拟 DOM 算法库)
* virtual-html (虚拟 DOM 生成器)
* hyperx (虚拟 DOM 生成器，使用标签模板字符串的方式)
* main-loop (虚拟 DOM 循环渲染函数)
* react-draft-wysiwyg (富文本编辑器)
* react-contextmenu (上下文菜单组件)
* react-avatar-editor (头像编辑组件)
* react-image-magnify (图片局部放大组件)
* react-swipe (基于 Swipe.js 的 React 组件库)
* react-motion-drawer (侧滑抽屉组件)
* react-treebeard (树型组件)
* react-motion (动画控制组件)
* react-dnd (拖拽组件)
* rc-tooltip (文字提示组件)
* formik (React, React Native 表单组件，仅适合原生控件)
* precise-ui (React UI 库之一)

## 参考

* [Node.js LibHunt](https://nodejs.libhunt.com)
* [npmview ](https://npmview.now.sh)
