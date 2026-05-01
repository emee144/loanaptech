import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function LoanDetails() {
  const { id } = useParams(); // grabs loan ID from URL
  const [loan, setLoan] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLoan();
  }, []);

  const fetchLoan = async () => {
    try {
      const res = await fetch(`https://loanaptech-ijz6.onrender.com/api/loans/${id}`, {
        credentials: "include"
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Loan not found");
        return;
      }

      setLoan(data.loan);

    } catch (err) {
      console.error(err);
      setError("Failed to load loan");
    }
  };

  if (error) return <h2>{error}</h2>;
  if (!loan) return <h2>Loading loan details...</h2>;

  return (
    <div>
      <h1>Loan Details</h1>
      <p><strong>Loan ID:</strong> {loan._id}</p>
      <p><strong>Amount:</strong> ₦{loan.amount}</p>
      <p><strong>Purpose:</strong> {loan.purpose}</p>
      <p><strong>Status:</strong> {loan.status}</p>
      <p><strong>Duration:</strong> {loan.duration} months</p>
      <p><strong>Monthly Payment:</strong> ₦{loan.monthlyPayment}</p>
      <p><strong>Total Payment:</strong> ₦{loan.totalPayment}</p>
    </div>
  );
}

export default LoanDetails;