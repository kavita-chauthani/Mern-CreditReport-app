import { useState } from "react";

export const Detail = () => {
  const [user, setUser] = useState({
    name: "",
    mobilePhone: "",
    pan: "",
    creditScore: "",
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
      const response = await fetch(`http://localhost:5000/student/create`, {
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
                  src="/images/bank.jpg"
                  alt=" bank images"
                  width="600"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Employee Detail</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name"> name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="mobilePhone"
                      placeholder="Enter your phone"
                      id="phone"
                      required
                      value={user.mobilePhone}
                      onChange={handleInput}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="pan">PAN</label>
                    <input
                      type="number"
                      name="pan"
                      placeholder="Enter your pan card number"
                      id="pan"
                      required
                      autoComplete="off"
                      value={user.pan}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="score"> CreditScore</label>
                    <input
                      type="number"
                      name="creditScore"
                      placeholder="Enter your credit score"
                      id="score"
                      required
                      autoComplete="off"
                      value={user.creditScore}
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
