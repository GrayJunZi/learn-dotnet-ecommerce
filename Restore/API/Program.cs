using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(options => options
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("http://localhost:3000"));

app.MapControllers();

DbInitializer.InitializeData(app);

app.Run();