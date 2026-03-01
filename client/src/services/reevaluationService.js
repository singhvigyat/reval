import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitReevaluationApplication = async (selectedPaper, selectedQuestions, paymentId) => {
  const payload = {
    paper: selectedPaper, // must include _id and subjectName at minimum
    selectedQuestions,    // e.g. ['q1', 'q2']
    paymentId             // e.g. 'rzp_payment_id_12345'
  };

  // Axios sends the POST request to your backend endpoint
  const response = await axios.post(`${BASE_URL}/api/students/apply-reevaluation`, payload, {
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' }
  });
  return response.data;
};
