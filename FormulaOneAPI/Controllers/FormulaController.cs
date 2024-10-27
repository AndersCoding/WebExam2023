namespace FormulaOneAPI.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FormulaOneAPI.Models;
using FormulaOneAPI.Contexts;

[ApiController]
[Route("Driver")]
public class FormulaController : ControllerBase
{
    private readonly FormulaContext _context;

    public FormulaController(FormulaContext context)
    {
        _context = context;
    }
    // Method for getting all the info from the table
    [HttpGet]
    public async Task<ActionResult<List<Driver>>> GetDrivers()
    {
        List<Driver> drivers = await _context.Drivers.ToListAsync();
        return drivers;
    }

    // Method for searching for id
    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> GetDriverById(int id)
    {
        Driver? driver = await _context.Drivers.FindAsync(id);
        if (driver != null){
            return Ok(driver);
        } else {
            return NotFound();
        }
    }

// Get driver by name
[HttpGet("ByName/{name}")]
public async Task<ActionResult<Driver>> GetDriverByName(string name)
{
     Driver? driver = await _context.Drivers
    .FirstOrDefaultAsync(driver => driver.Name != null && driver.Name.ToLower() == name.ToLower());
    if(driver != null)
    {
        return Ok(driver);
    }
    else
    {
        return NotFound();
    }
}

// POST method
[HttpPost]
public async Task<ActionResult<Driver>> PostDriver(Driver newDriver)
{
    _context.Drivers.Add(newDriver);
    await _context.SaveChangesAsync();
    return CreatedAtAction("GetDriverById", new{id = newDriver.Id}, newDriver);
}

// DELETE method
[HttpDelete("{id}")]
public async Task<IActionResult> Delete(int id)
{
    Driver? driver = await _context.Drivers.FindAsync(id);
    if(driver != null){
        _context.Drivers.Remove(driver);
        await _context.SaveChangesAsync();
    }
    return NoContent();
}

// PUT method
[HttpPut]
public async Task<IActionResult> PutDriver(Driver editedDriver)
{
    _context.Entry(editedDriver).State = EntityState.Modified;
    await _context.SaveChangesAsync();
    return NoContent();
}

}