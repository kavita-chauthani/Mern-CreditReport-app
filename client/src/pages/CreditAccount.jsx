import { useState } from "react";

export const CreditAccount = () => {
  const [user, setUser] = useState({
    creditCard: "",
    bank: "",
    address: "",
    accountNumber: "",
    amountOverdue: "",
    currentBalance: "",
  });
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/auth/credit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (error) {
      console.log("credit", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/card.jpg"
                  alt=" atm card images"
                  width="600"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">
                  Credit Account Information
                </h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="creditCard">creditCard</label>
                    <input
                      type="text"
                      name="creditCard"
                      placeholder="creditCard"
                      id="creditCard"
                      required
                      autoComplete="off"
                      value={user.creditCard}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="bank">bank</label>
                    <input
                      type="text"
                      name="bank"
                      placeholder="Enter your bank"
                      id="bank"
                      required
                      value={user.bank}
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="address">address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      id="address"
                      required
                      autoComplete="off"
                      value={user.address}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="accountNumber">accountNumber</label>
                    <input
                      type="number"
                      name="accountNumber"
                      placeholder="Enter your account Number"
                      id="score"
                      required
                      autoComplete="off"
                      value={user.accountNumber}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="amountOverdue">amountOverdue</label>
                    <input
                      type="number"
                      name="amountOverdue"
                      placeholder="Enter your amount Overdue"
                      id="score"
                      required
                      autoComplete="off"
                      value={user.amountOverdue}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="currentBalance"> currentBalance</label>
                    <input
                      type="number"
                      name="currentBalance"
                      placeholder="Enter your current Balance"
                      id="score"
                      required
                      autoComplete="off"
                      value={user.currentBalance}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
