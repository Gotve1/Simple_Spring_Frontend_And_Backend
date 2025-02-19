package com.example.spring_jpa_frontend_backend.Repository;

import com.example.spring_jpa_frontend_backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
