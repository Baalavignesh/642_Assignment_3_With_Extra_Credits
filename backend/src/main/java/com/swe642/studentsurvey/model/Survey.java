package com.swe642.studentsurvey.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

/**
 * Survey entity representing a student survey form.
 * Contains all required fields for capturing student feedback about campus visit.
 */
@Entity
@Table(name = "surveys")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Required text fields
    @NotBlank(message = "First name is required")
    @Column(nullable = false)
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Column(nullable = false)
    private String lastName;

    @NotBlank(message = "Street address is required")
    @Column(nullable = false)
    private String streetAddress;

    @NotBlank(message = "City is required")
    @Column(nullable = false)
    private String city;

    @NotBlank(message = "State is required")
    @Column(nullable = false)
    private String state;

    @NotBlank(message = "Zip code is required")
    @Column(nullable = false)
    private String zip;

    @NotBlank(message = "Telephone number is required")
    @Column(nullable = false)
    private String telephone;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private LocalDate dateOfSurvey;

    // Checkboxes - what they liked most about campus
    private Boolean likedStudents;
    private Boolean likedLocation;
    private Boolean likedCampus;
    private Boolean likedAtmosphere;
    private Boolean likedDormRooms;
    private Boolean likedSports;

    // Radio button - how they became interested
    @Column(nullable = false)
    private String interestSource; // friends, television, internet, other

    // Dropdown - likelihood of recommending
    @Column(nullable = false)
    private String recommendationLikelihood; // Very Likely, Likely, Unlikely

    // Additional comments
    @Column(columnDefinition = "TEXT")
    private String additionalComments;

    // Constructors
    public Survey() {
        this.likedStudents = false;
        this.likedLocation = false;
        this.likedCampus = false;
        this.likedAtmosphere = false;
        this.likedDormRooms = false;
        this.likedSports = false;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDateOfSurvey() {
        return dateOfSurvey;
    }

    public void setDateOfSurvey(LocalDate dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

    public Boolean getLikedStudents() {
        return likedStudents;
    }

    public void setLikedStudents(Boolean likedStudents) {
        this.likedStudents = likedStudents;
    }

    public Boolean getLikedLocation() {
        return likedLocation;
    }

    public void setLikedLocation(Boolean likedLocation) {
        this.likedLocation = likedLocation;
    }

    public Boolean getLikedCampus() {
        return likedCampus;
    }

    public void setLikedCampus(Boolean likedCampus) {
        this.likedCampus = likedCampus;
    }

    public Boolean getLikedAtmosphere() {
        return likedAtmosphere;
    }

    public void setLikedAtmosphere(Boolean likedAtmosphere) {
        this.likedAtmosphere = likedAtmosphere;
    }

    public Boolean getLikedDormRooms() {
        return likedDormRooms;
    }

    public void setLikedDormRooms(Boolean likedDormRooms) {
        this.likedDormRooms = likedDormRooms;
    }

    public Boolean getLikedSports() {
        return likedSports;
    }

    public void setLikedSports(Boolean likedSports) {
        this.likedSports = likedSports;
    }

    public String getInterestSource() {
        return interestSource;
    }

    public void setInterestSource(String interestSource) {
        this.interestSource = interestSource;
    }

    public String getRecommendationLikelihood() {
        return recommendationLikelihood;
    }

    public void setRecommendationLikelihood(String recommendationLikelihood) {
        this.recommendationLikelihood = recommendationLikelihood;
    }

    public String getAdditionalComments() {
        return additionalComments;
    }

    public void setAdditionalComments(String additionalComments) {
        this.additionalComments = additionalComments;
    }
}
