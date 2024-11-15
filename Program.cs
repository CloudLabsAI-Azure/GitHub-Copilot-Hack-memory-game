using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Serve static files from the wwwroot folder
app.UseStaticFiles();

// Configure the app to return index.html when the root URL is accessed
app.MapFallbackToFile("index.html");

app.Run();
