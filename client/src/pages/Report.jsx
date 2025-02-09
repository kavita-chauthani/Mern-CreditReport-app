import { useState } from "react";

export const Report = () => {
  const [user, setUser] = useState({
    totalAccounts: "",
    activeAccounts: "",
    closedAccounts: "",
    currentBalance: "",
    securedAmount: "",
    unsecuredAmount: "",
    last7DaysInquires: "",
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
      const response = await fetch(`http://localhost:5000/api/report`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (error) {
      console.log("Detail", error);
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
                  src="/images/credit.jpg"
                  alt=" credit Report images"
                  width="600"
                  height="800"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Report Summary</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="totalAccounts"> totalAccounts</label>
                    <input
                      type="text"
                      name="totalAccounts"
                      placeholder="totalAccounts"
                      id="totalAccounts"
                      required
                      autoComplete="off"
                      value={user.totalAccounts}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="activeAccounts"> activeAccounts</label>
                    <input
                      type="number"
                      name="activeAccounts"
                      placeholder="activeAccounts"
                      id="activeAccounts"
                      required
                      value={user.activeAccounts}
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="closedAccounts">closedAccounts</label>
                    <input
                      type="number"
                      name="closedAccounts"
                      placeholder="closedAccounts"
                      id="closedAccounts"
                      required
                      autoComplete="off"
                      value={user.closedAccounts}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="currentBalance">currentBalance</label>
                    <input
                      type="number"
                      name="currentBalance"
                      placeholder="currentBalance"
                      id="score"
                      required
                      autoComplete="off"
                      value={user.currentBalance}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="securedAmount"> securedAmount</label>
                    <input
                      type="number"
                      name="securedAmount"
                      placeholder="securedAmount"
                      id="securedAmount"
                      required
                      autoComplete="off"
                      value={user.securedAmount}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="unsecuredAmount"> unsecuredAmount</label>
                    <input
                      type="number"
                      name="unsecuredAmount"
                      placeholder="unsecuredAmount"
                      id="unsecuredAmount"
                      required
                      autoComplete="off"
                      value={user.unsecuredAmount}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="last7DaysInquires">
                      {" "}
                      last7DaysInquires
                    </label>
                    <input
                      type="number"
                      name="last7DaysInquires"
                      placeholder="last7DaysInquires"
                      id="last7DaysInquires"
                      required
                      autoComplete="off"
                      value={user.last7DaysInquires}
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
