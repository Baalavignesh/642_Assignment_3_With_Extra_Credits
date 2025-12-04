import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import surveyService from '../../services/surveyService';
import { Survey } from '../../models/Survey';
import './SurveyList.css';

const SurveyList: React.FC = () => {
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadSurveys();
  }, []);

  const loadSurveys = async (): Promise<void> => {
    setLoading(true);
    try {
      const data = await surveyService.getAllSurveys();
      setSurveys(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading surveys:', error);
      setLoading(false);
      alert('Failed to load surveys. Please make sure the backend is running.');
    }
  };

  const editSurvey = (id: number | undefined): void => {
    if (id) {
      navigate(`/survey/${id}`);
    }
  };

  const deleteSurvey = async (id: number | undefined): Promise<void> => {
    if (!id) return;

    if (window.confirm('Are you sure you want to delete this survey?')) {
      try {
        await surveyService.deleteSurvey(id);
        loadSurveys();
      } catch (error) {
        console.error('Error deleting survey:', error);
        alert('Failed to delete survey');
      }
    }
  };

  const getLikedItems = (survey: Survey): string => {
    const liked: string[] = [];
    if (survey.likedStudents) liked.push('Students');
    if (survey.likedLocation) liked.push('Location');
    if (survey.likedCampus) liked.push('Campus');
    if (survey.likedAtmosphere) liked.push('Atmosphere');
    if (survey.likedDormRooms) liked.push('Dorm Rooms');
    if (survey.likedSports) liked.push('Sports');
    return liked.length > 0 ? liked.join(', ') : 'None';
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Surveys</h2>
        <Link to="/survey" className="btn btn-primary">New Survey</Link>
      </div>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && surveys.length === 0 && (
        <div className="alert alert-info" role="alert">
          No surveys found. <Link to="/survey" className="alert-link">Create your first survey</Link>
        </div>
      )}

      {!loading && surveys.length > 0 && (
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Liked Most</th>
                    <th>Interest Source</th>
                    <th>Recommendation</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {surveys.map((survey) => (
                    <tr key={survey.id}>
                      <td>{survey.id}</td>
                      <td>{survey.firstName} {survey.lastName}</td>
                      <td>{survey.email}</td>
                      <td>{formatDate(survey.dateOfSurvey)}</td>
                      <td>{getLikedItems(survey)}</td>
                      <td>{survey.interestSource}</td>
                      <td>{survey.recommendationLikelihood}</td>
                      <td>
                        <div className="btn-group btn-group-sm" role="group">
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => editSurvey(survey.id)}
                            title="Edit"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => deleteSurvey(survey.id)}
                            title="Delete"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-3 text-muted">
              Total Surveys: {surveys.length}
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-4 mb-5">
        <Link to="/" className="text-muted">Back to Home</Link>
      </div>
    </div>
  );
};

export default SurveyList;

