import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const title = 'Student Survey Application';
  const subtitle = 'George Mason University Campus Visit Feedback';

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-success">{title}</h1>
            <p className="lead text-muted">{subtitle}</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 text-center">
                <div className="card-body d-flex flex-column justify-content-center p-5">
                  <h3 className="card-title mb-3">Student Survey</h3>
                  <p className="card-text mb-4">
                    Share your feedback about your campus visit experience
                  </p>
                  <Link to="/survey" className="btn btn-primary btn-lg">
                    Take Survey
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 text-center">
                <div className="card-body d-flex flex-column justify-content-center p-5">
                  <h3 className="card-title mb-3">All Surveys</h3>
                  <p className="card-text mb-4">
                    View, update, or delete existing survey responses
                  </p>
                  <Link to="/surveys" className="btn btn-secondary btn-lg">
                    View Surveys
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;

