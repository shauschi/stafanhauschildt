package de.stefanhauschildt.personal.de.stefanhauschildt.personal.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;
import java.util.List;

public class JobDto {

  private String position;
  private LocalDate start;
  private LocalDate end;
  private List<String> description;
  private CompanyDto company;
  private List<TagDto> tags;

  public String getPosition() {
    return position;
  }

  public void setPosition(String position) {
    this.position = position;
  }

  public LocalDate getStart() {
    return start;
  }

  public void setStart(LocalDate start) {
    this.start = start;
  }

  public LocalDate getEnd() {
    return end;
  }

  public void setEnd(LocalDate end) {
    this.end = end;
  }

  public List<String> getDescription() {
    return description;
  }

  public void setDescription(List<String> description) {
    this.description = description;
  }

  public CompanyDto getCompany() {
    return company;
  }

  public void setCompany(CompanyDto company) {
    this.company = company;
  }

  public List<TagDto> getTags() {
    return tags;
  }

  public void setTags(List<TagDto> tags) {
    this.tags = tags;
  }

  @Override
  public String toString() {
    return "JobDto{" +
        "position='" + position + '\'' +
        ", start=" + start +
        ", end=" + end +
        ", company=" + company +
        ", tags=" + tags +
        '}';
  }
}
