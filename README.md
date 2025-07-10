# learn-dotnet-ecommerce
.NET 电商项目学习

## 技术栈

- .NET
- React + Redux

## 一、API 基础

### 1. 创建API项目

```bash
mkdir Restore
cd Restore
dotnet new sln
dotnet new webapi -n API -controllers
dotnet sln add .\API
```

清除开发者证书
```bash
dotnet dev-certs https --clean
```

安装开发者证书
```bash
dotnet dev-certs https
```

### 2. EntityFrameworkCore

ORM是指对象关系映射(Objects Relational Data, O/RM)，用于直接编写C#代码来操作数据库。

- `DbContext` 提供了与数据库的会话，并管理了程序与数据库之间的连接。
- `DbSet` 是数据库中的表映射关系。


安装EntityFrameworkCore
```bash
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

安装`dotnet-ef`工具
```bash
dotnet tool install --global dotnet-ef
```

查看工具版本
```bash
dotnet tool list -g
```

创建数据库迁移
```bash
dotnet ef migrations add InitialCreate -o Data/Migrations
```

运行数据库迁移
```bash
dotnet ef database update
```

移除数据库迁移
```bash
dotnet ef database drop
```

## 二、React 基础

### 1. 创建React项目

使用`vite`创建react项目。
```bash
npm create vite@latest
```

安装依赖
```bash
PS D:\SourceCode\learn-dotnet-ecommerce\Restore> npm create vite@latest
Need to install the following packages:
create-vite@7.0.0
Ok to proceed? (y) y


> npx
> create-vite

│
◇  Project name:
│  client
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC
│
◇  Scaffolding project in D:\SourceCode\learn-dotnet-ecommerce\Restore\client...    
│
└  Done. Now run:

  cd client
  npm install
  npm run dev

```

修改端口号可以在 `vite.config.ts` 文件中，增加 `server` 配置并设置 `port` 字段。
```ts
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react()],
})
```

### 2. 增加跨域处理

添加Cors服务。
```csharp
builder.Services.AddCors();
```

添加Cors中间件。
```csharp
app.UseCors(builder => builder.AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("http://localhost:3000"));
```

### 3. 安装样式库

前端安装 `vite-plugin-mkcert` 插件。
```bash
npm install -D vite-plugin-mkcert
``` 

在 `vite.config.ts` 文件中增加该插件的调用。

```ts
...
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  ...
  plugins: [react(), mkcert()],
})
```

安装 `materi-ui`。
```bash
npm install @mui/material @emotion/react @emotion/styled
```

安装 `roboto` 字体。
```bash
npm install @fontsource/roboto
```

安装 `icons-material` 图标。
```bash
npm install @mui/icons-material
```

## 三、React 路由

### 1. 为什么需要路由

SPA需要路由是因为，它是一个单页应用，没有多个页面来路由，所以我们不是用一个文件替换另一个文件，我们是用一个组件来替换另一个组件。我们使用状态管理来控制显示某个组件。

### 2. 安装插件

安装 `react-router-dom` 路由库。
```bash
npm install react-router-dom
```