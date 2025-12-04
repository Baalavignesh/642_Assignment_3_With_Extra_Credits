export interface Survey {
  id?: number;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  telephone: string;
  email: string;
  dateOfSurvey: string;
  likedStudents: boolean;
  likedLocation: boolean;
  likedCampus: boolean;
  likedAtmosphere: boolean;
  likedDormRooms: boolean;
  likedSports: boolean;
  interestSource: string;
  recommendationLikelihood: string;
  additionalComments: string;
}

export const createEmptySurvey = (): Survey => ({
  id: undefined,
  firstName: '',
  lastName: '',
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
  telephone: '',
  email: '',
  dateOfSurvey: '',
  likedStudents: false,
  likedLocation: false,
  likedCampus: false,
  likedAtmosphere: false,
  likedDormRooms: false,
  likedSports: false,
  interestSource: '',
  recommendationLikelihood: '',
  additionalComments: ''
});


