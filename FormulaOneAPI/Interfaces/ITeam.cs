namespace FormulaOneAPI.Interfaces;

public interface ITeam
{
    public int Id {get; set;} // is only used by the database
    public string? Manufactor {get; set;}
    public string? Image {get; set;}
    public string? Driver1 {get; set;}
    public string? Driver2 {get; set;}
}