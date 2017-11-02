package de.stefanhauschildt.personal.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;
import de.stefanhauschildt.personal.de.stefanhauschildt.personal.controller.JobDto;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Component
public class JobService {

  private File getFileFromResource(String filename) {
    return new File(getClass().getClassLoader().getResource(filename).getFile());
  }

  public List<JobDto> readFromFile() throws IOException {
    ObjectMapper objectMapper = new ObjectMapper()
        .registerModule(new ParameterNamesModule())
        .registerModule(new Jdk8Module())
        .registerModule(new JavaTimeModule());
    return objectMapper.readValue(
        getFileFromResource("jobs.json"), new TypeReference<List<JobDto>>(){});
  }

}
