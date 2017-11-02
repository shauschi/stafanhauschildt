package de.stefanhauschildt.personal.de.stefanhauschildt.personal.controller;

public class TagDto {
  private String label;
  private String cat;

  public String getLabel() {
    return label;
  }

  public void setLabel(String label) {
    this.label = label;
  }

  public String getCat() {
    return cat;
  }

  public void setCat(String cat) {
    this.cat = cat;
  }

  @Override
  public String toString() {
    return "TagDto{" +
        "label='" + label + '\'' +
        ", cat='" + cat + '\'' +
        '}';
  }
}
