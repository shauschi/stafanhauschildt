package de.stefanhauschildt.personal.de.stefanhauschildt.personal.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class UserController {

  @RequestMapping("/users")
  @ResponseBody
  public List<UserDto> users() {
    return Arrays.asList(
        new UserDto("Stefan", "Hauschildt"),
        new UserDto("Viviane", "Hauschildt"),
        new UserDto("Test", "User 1"),
        new UserDto("Test", "User 2"),
        new UserDto("Test", "User 3"),
        new UserDto("Test", "User n"));
  }

}