using FormulaOneAPI.Contexts;
using FormulaOneAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
// CORS
builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAnyOrigin",
        policies => policies
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader()
        
        );
    }
);
// Generating the database-file
builder.Services.AddDbContext<FormulaContext>(options => options.UseSqlite("Data Source=Databases/FormulaOne.db" ) );
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAnyOrigin");
// Setting the index.html-file as main page
DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);

app.UseStaticFiles(); // Gives access to the file in wwwwroot-folder

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
