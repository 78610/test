package com.example.test.entity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Test {
    @Id
    private String id;
    private String high;
    private String time;
    private String equipment;

    @Override
    public String toString() {
        return "Test{" +
                "id='" + id + '\'' +
                ", high='" + high + '\'' +
                ", time='" + time + '\'' +
                ", equipment='" + equipment + '\'' +
                '}';
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getHigh() {
        return high;
    }

    public void setHigh(String high) {
        this.high = high;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getEquipment() {
        return equipment;
    }

    public void setEquipment(String equipment) {
        this.equipment = equipment;
    }

    @Id
    public String getId() {
        return id;
    }
}
