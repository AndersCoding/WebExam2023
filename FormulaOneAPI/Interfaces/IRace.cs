namespace FormulaOneAPI.Interfaces;

public interface IRace
{
public int Id {get; set;} // Id is only used by the database
public string? WinnerName {get; set;}
public double WinnerTime {get; set;}
public string? GrandPrix {get; set;}
public int NumberOfLaps {get; set;}
}