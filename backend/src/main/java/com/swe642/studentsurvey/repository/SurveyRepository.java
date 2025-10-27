package com.swe642.studentsurvey.repository;

import com.swe642.studentsurvey.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for Survey entity.
 * Provides CRUD operations using Spring Data JPA.
 */
@Repository
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    // JpaRepository provides all basic CRUD operations:
    // - save()
    // - findById()
    // - findAll()
    // - deleteById()
    // - count()
    // Additional custom query methods can be added here if needed
}
