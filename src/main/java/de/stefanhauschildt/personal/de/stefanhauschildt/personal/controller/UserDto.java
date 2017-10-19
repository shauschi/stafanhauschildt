package de.stefanhauschildt.personal.de.stefanhauschildt.personal.controller;

public class UserDto {

  private String vorname;
  private String nachname;

  public UserDto(String vorname, String nachname) {
    this.vorname = vorname;
    this.nachname = nachname;
  }

  public String getVorname() {
    return vorname;
  }

  public String getNachname() {
    return nachname;
  }
}
