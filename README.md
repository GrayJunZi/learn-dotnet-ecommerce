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