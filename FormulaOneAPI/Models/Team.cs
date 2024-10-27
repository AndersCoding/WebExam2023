namespace FormulaOneAPI.Models;

using FormulaOneAPI.Interfaces;

public class Team : ITeam
{
    public int Id {get; set;}
    public string? Manufactor {get; set;}
    public string? Image {get; set;}
    public string? Driver1 {get; set;}
    public string? Driver2 {get; set;}
}