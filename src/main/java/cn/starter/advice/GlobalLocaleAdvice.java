package cn.starter.advice;

import java.util.Locale;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

@ControllerAdvice
public class GlobalLocaleAdvice {

  @ModelAttribute("currentLocale")
  public Locale getCurrentLocale() {
    return LocaleContextHolder.getLocale();
  }
}
