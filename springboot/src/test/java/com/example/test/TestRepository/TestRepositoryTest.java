package com.example.test.TestRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TestRepositoryTest {
    @Autowired
    private TestRepository testRepository;

    @Test
    void findAll(){
        System.out.println(testRepository.findAll());
    }
}