namespace FormulaOneAPI.Contexts;

using FormulaOneAPI.Models;
using Microsoft.EntityFrameworkCore;

public class FormulaContext : DbContext
{
    public FormulaContext(DbContextOptions<FormulaContext> options):base(options){}

// Registering the different tables into the database
    public DbSet<Driver> Drivers {get; set;}
    public DbSet<Race> Races {get; set;}
    public DbSet<Team> Teams {get; set;}
}