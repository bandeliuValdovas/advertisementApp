package com.example.demo.exception;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ProblemDetail;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({EntityNotFoundException.class})
    public ProblemDetail handleEntityNotFoundException(EntityNotFoundException exception) {
        ProblemDetail res = ProblemDetail.forStatus(404);
        res.setTitle("ENTITY_NOT_FOUND_ERROR");
        res.setDetail(exception.getMessage());
        return res;
    }


    @ExceptionHandler({UserNotFoundException.class})
    public ProblemDetail handleUserNotFound(UserNotFoundException exception) {
        ProblemDetail res = ProblemDetail.forStatus(404);
        res.setTitle("USER_NOT_FOUND_ERROR");
        res.setDetail(exception.getMessage());
        return res;
    }

    @ExceptionHandler({CategoryNotFoundException.class})
    public ProblemDetail handleCategoryNotFound(CategoryNotFoundException exception) {
        ProblemDetail res = ProblemDetail.forStatus(404);
        res.setTitle("CATEGORY_NOT_FOUND_ERROR");
        res.setDetail(exception.getMessage());
        return res;
    }

    @ExceptionHandler({EntityExistsException.class})
    public ProblemDetail handleEntityAlreadyExists(EntityExistsException exception) {
        ProblemDetail res = ProblemDetail.forStatus(409);
        res.setTitle("ENTITY_ALREADY_EXISTS");
        res.setDetail(exception.getMessage());
        return res;
    }

    //TESTING
    @ExceptionHandler({AuthenticationException.class})
    public ProblemDetail handleAuthenticationException(AuthenticationException exception) {
        ProblemDetail res = ProblemDetail.forStatus(401);
        res.setTitle("AUTHENTICATION_PROBLEM");
        res.setDetail(exception.getMessage());
        return res;
    }


}
