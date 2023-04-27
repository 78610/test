package com.example.test.TestRepository;

import com.example.test.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends JpaRepository<Test,String> {
    @Query(value = "select * from test order by time desc limit 1", nativeQuery = true)
    Test findLastData();
}
