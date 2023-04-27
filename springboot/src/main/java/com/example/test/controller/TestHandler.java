package com.example.test.controller;

import com.example.test.TestRepository.TestRepository;
import com.example.test.entity.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/test")
@EnableScheduling
public class TestHandler {
    @Autowired
    private TestRepository testRepository;

    @Scheduled(cron = "0/10 * * * * ?")//每十秒执行一次
    @GetMapping("/findAll")
    /*public  List<Test> findAll(){
        return testRepository.findAll();
    }*/
    public Test getLastTest() {
        return testRepository.findLastData();
    }
}
