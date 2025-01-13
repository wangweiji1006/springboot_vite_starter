package cn.starter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

  @GetMapping(value = {"/", "/index.html"})
  public String index(Model mode) {
    mode.addAttribute("name", "index");
    return "index";
  }

  @GetMapping("/about.html")
  public String about(Model mode) {
    mode.addAttribute("name", "about");
    return "about";
  }
}
