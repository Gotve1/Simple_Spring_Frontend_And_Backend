package com.example.spring_jpa_frontend_backend.Repository;

import com.example.simple_spring_frontend_and_backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
