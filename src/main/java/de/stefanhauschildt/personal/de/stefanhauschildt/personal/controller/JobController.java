package de.stefanhauschildt.personal.de.stefanhauschildt.personal.controller;

import de.stefanhauschildt.personal.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class JobController {

  @Autowired
  private JobService jobService;

  @RequestMapping("/jobs")
  @ResponseBody
  public List<JobDto> getJobs() throws IOException {
    return jobService.readFromFile()
        .stream()
        .sorted(Comparator.comparing(JobDto::getStart, Comparator.nullsLast(Comparator.reverseOrder())))
        .collect(Collectors.toList());
  }
}
