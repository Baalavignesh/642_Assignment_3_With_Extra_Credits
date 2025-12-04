import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import surveyService from '../../services/surveyService';
import { Survey, createEmptySurvey } from '../../models/Survey';
import './SurveyForm.css';

interface ValidationErrors {
  [key: string]: string;
}

const SurveyForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditMode = !!id;

  const [formData, setFormData] = useState<Survey>(createEmptySurvey());
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    if (isEditMode && id) {
      loadSurvey(parseInt(id));
    }
  }, [id, isEditMode]);

  const loadSurvey = async (surveyId: number): Promise<void> => {
    try {
      const survey = await surveyService.getSurveyById(surveyId);
      setFormData(survey);
    } catch (error) {
      console.error('Error loading survey:', error);
      alert('Failed to load survey data');
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.streetAddress) newErrors.streetAddress = 'Street address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip || !/^\d{5}$/.test(formData.zip)) {
      newErrors.zip = 'Valid 5-digit zip required';
    }
    if (!formData.telephone || !/^\d{10}$/.test(formData.telephone)) {
      newErrors.telephone = 'Valid 10-digit phone number required';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.dateOfSurvey) newErrors.dateOfSurvey = 'Date of survey is required';
    if (!formData.interestSource) newErrors.interestSource = 'Please select how you became interested';
    if (!formData.recommendationLikelihood) {
      newErrors.recommendationLikelihood = 'Please select a recommendation likelihood';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) {
      return;
    }

    try {
      if (isEditMode && id) {
        await surveyService.updateSurvey(parseInt(id), formData);
        setShowSuccessMessage(true);
        setTimeout(() => {
          navigate('/surveys');
        }, 2000);
      } else {
        await surveyService.createSurvey(formData);
        setShowSuccessMessage(true);
        setTimeout(() => {
          handleReset();
          setShowSuccessMessage(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert(`Failed to ${isEditMode ? 'update' : 'submit'} survey`);
    }
  };

  const handleReset = (): void => {
    setSubmitted(false);
    setFormData(createEmptySurvey());
    setErrors({});
  };

  const handleCancel = (): void => {
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="mb-4">
            <h2 className="text-center">
              {isEditMode ? 'Update Survey' : 'Student Survey Form'}
            </h2>
            <p className="text-center text-muted">Please fill out all required fields</p>
          </div>

          {showSuccessMessage && (
            <div className="alert alert-success" role="alert">
              Survey {isEditMode ? 'updated' : 'submitted'} successfully!
            </div>
          )}

          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Campus Visit Feedback</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>

                <h6 className="border-bottom pb-2 mb-3">Personal Information</h6>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      type="text"
                      className={`form-control ${submitted && errors.firstName ? 'is-invalid' : ''}`}
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {submitted && errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className={`form-control ${submitted && errors.lastName ? 'is-invalid' : ''}`}
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {submitted && errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="streetAddress" className="form-label">Street Address *</label>
                  <input
                    type="text"
                    className={`form-control ${submitted && errors.streetAddress ? 'is-invalid' : ''}`}
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                  {submitted && errors.streetAddress && (
                    <div className="invalid-feedback">{errors.streetAddress}</div>
                  )}
                </div>

                <div className="row mb-3">
                  <div className="col-md-5">
                    <label htmlFor="city" className="form-label">City *</label>
                    <input
                      type="text"
                      className={`form-control ${submitted && errors.city ? 'is-invalid' : ''}`}
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {submitted && errors.city && (
                      <div className="invalid-feedback">{errors.city}</div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">State *</label>
                    <input
                      type="text"
                      className={`form-control ${submitted && errors.state ? 'is-invalid' : ''}`}
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {submitted && errors.state && (
                      <div className="invalid-feedback">{errors.state}</div>
                    )}
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">Zip Code *</label>
                    <input
                      type="text"
                      className={`form-control ${submitted && errors.zip ? 'is-invalid' : ''}`}
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                    {submitted && errors.zip && (
                      <div className="invalid-feedback">{errors.zip}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="telephone" className="form-label">Telephone Number *</label>
                    <input
                      type="tel"
                      className={`form-control ${submitted && errors.telephone ? 'is-invalid' : ''}`}
                      id="telephone"
                      name="telephone"
                      placeholder="1234567890"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                    {submitted && errors.telephone && (
                      <div className="invalid-feedback">{errors.telephone}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className={`form-control ${submitted && errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {submitted && errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="dateOfSurvey" className="form-label">Date of Survey *</label>
                  <input
                    type="date"
                    className={`form-control ${submitted && errors.dateOfSurvey ? 'is-invalid' : ''}`}
                    id="dateOfSurvey"
                    name="dateOfSurvey"
                    value={formData.dateOfSurvey}
                    onChange={handleChange}
                  />
                  {submitted && errors.dateOfSurvey && (
                    <div className="invalid-feedback">{errors.dateOfSurvey}</div>
                  )}
                </div>

                <h6 className="border-bottom pb-2 mb-3 mt-4">Campus Feedback</h6>

                <div className="mb-3">
                  <label className="form-label d-block">What did you like most about the campus?</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="likedStudents"
                      name="likedStudents"
                      checked={formData.likedStudents}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="likedStudents">Students</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="likedLocation"
                      name="likedLocation"
                      checked={formData.likedLocation}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="likedLocation">Location</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="likedCampus"
                      name="likedCampus"
                      checked={formData.likedCampus}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="likedCampus">Campus</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="likedAtmosphere"
                      name="likedAtmosphere"
                      checked={formData.likedAtmosphere}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="likedAtmosphere">Atmosphere</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="likedDormRooms"
                      name="likedDormRooms"
                      checked={formData.likedDormRooms}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="likedDormRooms">Dorm Rooms</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="likedSports"
                      name="likedSports"
                      checked={formData.likedSports}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="likedSports">Sports</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label d-block">How did you become interested in the university? *</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="interestFriends"
                      name="interestSource"
                      value="friends"
                      checked={formData.interestSource === 'friends'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="interestFriends">Friends</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="interestTelevision"
                      name="interestSource"
                      value="television"
                      checked={formData.interestSource === 'television'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="interestTelevision">Television</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="interestInternet"
                      name="interestSource"
                      value="internet"
                      checked={formData.interestSource === 'internet'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="interestInternet">Internet</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="interestOther"
                      name="interestSource"
                      value="other"
                      checked={formData.interestSource === 'other'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="interestOther">Other</label>
                  </div>
                  {submitted && errors.interestSource && (
                    <div className="invalid-feedback d-block">{errors.interestSource}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="recommendationLikelihood" className="form-label">
                    Likelihood of recommending this school to other students *
                  </label>
                  <select
                    className={`form-select ${submitted && errors.recommendationLikelihood ? 'is-invalid' : ''}`}
                    id="recommendationLikelihood"
                    name="recommendationLikelihood"
                    value={formData.recommendationLikelihood}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Very Likely">Very Likely</option>
                    <option value="Likely">Likely</option>
                    <option value="Unlikely">Unlikely</option>
                  </select>
                  {submitted && errors.recommendationLikelihood && (
                    <div className="invalid-feedback">{errors.recommendationLikelihood}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="additionalComments" className="form-label">Additional Comments</label>
                  <textarea
                    className="form-control"
                    id="additionalComments"
                    name="additionalComments"
                    rows={4}
                    placeholder="Please share any additional feedback..."
                    value={formData.additionalComments}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex gap-2 justify-content-end mt-4">
                  <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                  {!isEditMode && (
                    <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>
                      Reset
                    </button>
                  )}
                  <button type="submit" className="btn btn-primary">
                    {isEditMode ? 'Update' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center mt-3 mb-5">
            <Link to="/" className="text-muted">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;

