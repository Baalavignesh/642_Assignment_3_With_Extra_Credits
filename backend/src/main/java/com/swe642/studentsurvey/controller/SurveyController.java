package com.swe642.studentsurvey.controller;

import com.swe642.studentsurvey.model.Survey;
import com.swe642.studentsurvey.repository.SurveyRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST Controller for Survey operations.
 * Provides endpoints for Create, Read, Update, and Delete operations.
 */
@RestController
@RequestMapping("/api/surveys")
@CrossOrigin(origins = "http://localhost:4200")
public class SurveyController {

    @Autowired
    private SurveyRepository surveyRepository;

    /**
     * Create a new survey.
     * POST /api/surveys
     */
    @PostMapping
    public ResponseEntity<Survey> createSurvey(@Valid @RequestBody Survey survey) {
        try {
            Survey savedSurvey = surveyRepository.save(survey);
            return new ResponseEntity<>(savedSurvey, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get all surveys.
     * GET /api/surveys
     */
    @GetMapping
    public ResponseEntity<List<Survey>> getAllSurveys() {
        try {
            List<Survey> surveys = surveyRepository.findAll();
            return new ResponseEntity<>(surveys, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get a survey by ID.
     * GET /api/surveys/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable("id") Long id) {
        Optional<Survey> surveyData = surveyRepository.findById(id);

        if (surveyData.isPresent()) {
            return new ResponseEntity<>(surveyData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Update a survey.
     * PUT /api/surveys/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable("id") Long id, @Valid @RequestBody Survey survey) {
        Optional<Survey> surveyData = surveyRepository.findById(id);

        if (surveyData.isPresent()) {
            Survey existingSurvey = surveyData.get();

            // Update all fields
            existingSurvey.setFirstName(survey.getFirstName());
            existingSurvey.setLastName(survey.getLastName());
            existingSurvey.setStreetAddress(survey.getStreetAddress());
            existingSurvey.setCity(survey.getCity());
            existingSurvey.setState(survey.getState());
            existingSurvey.setZip(survey.getZip());
            existingSurvey.setTelephone(survey.getTelephone());
            existingSurvey.setEmail(survey.getEmail());
            existingSurvey.setDateOfSurvey(survey.getDateOfSurvey());
            existingSurvey.setLikedStudents(survey.getLikedStudents());
            existingSurvey.setLikedLocation(survey.getLikedLocation());
            existingSurvey.setLikedCampus(survey.getLikedCampus());
            existingSurvey.setLikedAtmosphere(survey.getLikedAtmosphere());
            existingSurvey.setLikedDormRooms(survey.getLikedDormRooms());
            existingSurvey.setLikedSports(survey.getLikedSports());
            existingSurvey.setInterestSource(survey.getInterestSource());
            existingSurvey.setRecommendationLikelihood(survey.getRecommendationLikelihood());
            existingSurvey.setAdditionalComments(survey.getAdditionalComments());

            return new ResponseEntity<>(surveyRepository.save(existingSurvey), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Delete a survey.
     * DELETE /api/surveys/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteSurvey(@PathVariable("id") Long id) {
        try {
            surveyRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Delete all surveys.
     * DELETE /api/surveys
     */
    @DeleteMapping
    public ResponseEntity<HttpStatus> deleteAllSurveys() {
        try {
            surveyRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
