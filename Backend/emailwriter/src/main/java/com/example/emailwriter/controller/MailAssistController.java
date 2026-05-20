package com.example.emailwriter.controller;
import org.springframework.web.bind.annotation.RestController;

import com.example.emailwriter.dto.EmailRequest;
import com.example.emailwriter.service.MailAssistService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class MailAssistController {
    private final MailAssistService mailAssistService;
    @PostMapping("/generate")
    public ResponseEntity<String> postMethodName(@RequestBody EmailRequest emailRequest) {
        String responseBody = mailAssistService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(responseBody);
    }
    @GetMapping("/")
    public String getMethodName() {
        return "new String()";
    }
}
