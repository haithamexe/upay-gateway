import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Section({ children }) {
  return (
    <section className="border-1 rounded-xl bg-bg w-full  p-2 border-gray-300">
      <div className="border-1 rounded-xl bg-secondary  w-full p-2 border-gray-300">
        {children}
      </div>
    </section>
  );
}

const Payment = () => {
  const { paymentParams } = useParams();

  const images = [
    "/images/qi-card.png",
    "/images/zain cash.png",
    "/images/visa.png",
    "/images/mastercard.png",
  ];

  const products = [
    {
      image: "https://i.imgur.com/DMQHGA0.jpeg",
      name: "Mid-Century Modern Wooden Dining Table",
      description:
        "A beautiful wooden dining table with a mid-century modern design.",
      price: "$299.99",
    },
    {
      image: "https://i.imgur.com/6wkyyIN.jpeg",
      name: "Modern Elegance Teal Armchair",
      description:
        "A stylish teal armchair that adds a touch of elegance to any room.",
      price: "$99.99",
    },
    {
      image: "https://i.imgur.com/3oXNBst.jpeg",
      name: "Modern Minimalist Workstation Setup",
      description:
        "A sleek and modern workstation setup that enhances productivity.",
      price: "$49.99",
    },
    {
      image: "https://i.imgur.com/3dU0m72.jpeg",
      name: "Modern Ergonomic Office Chair",
      description:
        "A comfortable and contemporary office chair designed for productivity.",
      price: "$399.99",
    },
  ];

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    phoneNumber: "",
    pin: "",
  });

  const [paymentType, setPaymentType] = useState("qi-card");

  const [otpVerified, setOtpVerified] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "F1") {
        e.preventDefault();
        setFormData({
          cardNumber: "5213720304238582",
          cardHolder: "Hussam AlRassam",
          expiryDate: "01/32",
          cvv: "642",
          phoneNumber: "0781234567",
          pin: "1234",
        });
      }
      // if (e.key === "F12") {
      //   e.preventDefault();
      //   alert("F12 is disabled.");
      // }
    });

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      alert("Right-click is disabled.");
    });

    return () => {
      document.removeEventListener("keydown", () => {});
      document.removeEventListener("contextmenu", () => {});
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {/* <header className="flex items-center justify-between w-full p-5 py-2 h-16 bg-secondary border-b-1">
        <div className="flex items-center gap-2 h-full py-[10px]">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-full object-contain"
          />
          <h1 className="text-xl font-bold">U-Pay</h1>
        </div>
        <h1 className="text-xl font-bold">Team 16</h1>
      </header> */}
      {/* otp popup */}
      {!otpVerified && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <div className="bg-white p-5 rounded-md shadow-md z-100 w-1/4 ">
            <img
              src="/images/logo.png"
              alt="OTP"
              className="w-20 h-20 mb-4 mx-auto"
            />
            <h2 className="text-lg  mb-4 ">
              Please enter the <span className="font-bold">OTP</span> Number
              with <span className="font-bold">4 digits</span> we sent to your
              phone ending with <span className="font-bold">****1234</span>
            </h2>
            <input
              type="text"
              className="border-2 border-gray-300 p-2 rounded-md w-full mb-4"
              placeholder="Enter OTP"
            />
            <p className="text-sm text-gray-600 mb-4">
              (By clicking Verify, you are confirming the purchase of $902.46)
            </p>
            <div className="flex justify-end">
              <button
                className="bg-blue-600 text-white p-2 rounded-md w-full "
                onClick={() => setOtpVerified(true)}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}

      <main className=" w-full flex justify-center  p-20 gap-3 flex-wrap">
        {/* <section className="border-1 rounded-xl bg-bg w-1/2  p-1 border-gray-300">
            <div className="bg-blue-200 w-full h-full rounded-lg p-2"> */}
        <div className="w-1/2 max-w-[500px]">
          <Section>
            {/* <div className="border-b-2 pb-4 border-blue-300 mb-2">
                <h1 className="text-3xl font-bold ">Payment Method Details</h1>
              </div> */}
            <div className="flex justify-between border-b-2 border-blue-300 pb-2 mb-2 ">
              <h1 className="text-2xl font-bold ">Payment Type</h1>
              <div className="flex gap-2 flex-wrap ">
                {images.map((image) => (
                  <div
                    key={image}
                    className={
                      "cursor-pointer overflow-hidden rounded-full flex items-center justify-center border-3  hover:border-blue-900 transition w-11 h-11 " +
                      (image.includes(paymentType)
                        ? "  border-blue-500 "
                        : "  border-gray-100 ")
                    }
                  >
                    <img
                      key={image}
                      src={image}
                      alt="Card"
                      className={
                        " w-full h-full  " +
                        (image.split("/").pop().split(".")[0] === "zain cash"
                          ? " object-cover "
                          : " object-contain")
                      }
                      onClick={() => {
                        const type = image
                          .split("/")
                          .pop()
                          .split(".")[0]
                          .toLowerCase();
                        setPaymentType(type);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <h1 className="text-lg font-bold text-gray-900">
              {paymentType
                .split("-")
                .join(" ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}{" "}
              Details
            </h1>
            {paymentType !== "zain cash" && (
              <form className="relative form">
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold ">Card Number</label>
                    <AiOutlineQuestionCircle className="absolute right-0 text-gray-900 rounded-full " />
                    <input
                      type="text"
                      className="border-1 rounded-md p-2 "
                      placeholder="1234 5678 9012 3456"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold ">Card Holder</label>
                    <AiOutlineQuestionCircle className="absolute right-0 text-gray-900  rounded-full " />

                    <input
                      type="text"
                      className="border-1 rounded-md p-2 "
                      placeholder="John Doe"
                      name="cardHolder"
                      value={formData.cardHolder}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-1 w-1/2 relative">
                      <label className="font-semibold ">Expiry Date</label>
                      <AiOutlineQuestionCircle className="absolute right-0 text-gray-900 rounded-full  top-1" />

                      <input
                        type="text"
                        className="border-1 rounded-md p-2 "
                        placeholder="MM/YY"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-1/2 relative">
                      <label className="font-semibold ">CVV</label>
                      <AiOutlineQuestionCircle className="absolute right-0 text-gray-900 rounded-full  top-1" />

                      <input
                        type="text"
                        className="border-1 rounded-md p-2 "
                        placeholder="123"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </form>
            )}
            {paymentType === "zain cash" && (
              <form className="relative form">
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold ">Phone Number</label>
                    <AiOutlineQuestionCircle className="absolute right-0 text-gray-900 rounded-full " />
                    <input
                      type="text"
                      className="border-1 rounded-md p-2 "
                      placeholder="0781234567"
                      name="phoneNumber"
                      value={formData.phoneNumber || ""}
                      onChange={(e) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          phoneNumber: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-semibold ">PIN</label>
                    <AiOutlineQuestionCircle className="absolute right-0 text-gray-900  rounded-full " />

                    <input
                      type="password"
                      className="border-1 rounded-md p-2 "
                      placeholder="****"
                      name="pin"
                      value={formData.pin || ""}
                      onChange={(e) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          pin: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </form>
            )}
          </Section>
        </div>
        <section className="w-1/2 max-w-[500px]">
          <Section>
            <h1 className="w-full text-2xl font-bold text-black border-b-2 pb-4 mb-2 border-blue-300">
              Order Summary
            </h1>
            <div className="max-h-[220px] overflow-y-auto">
              {products.map((product, index) => (
                <div key={index} className="flex gap-4 mb-4 last:mb-0 ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold text-lg text-black">
                      {product.name}
                    </h2>
                    <p className="text-gray-700">{product.description}</p>
                    <span className="font-semibold text-blue-600">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
          <section className="mt-2">
            <Section>
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold text-black">Subtotal</h1>
                <span className="font-bold text-2xl text-blue-600">
                  $849.96
                </span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className=" font-semibold text-lg text-black">Tax (5%)</h3>
                <span className="font-bold text-lg text-blue-600">$42.50</span>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-black">Shipping</h3>
                <span className="font-bold text-lg text-blue-600">$10.00</span>
              </div>
              <div className="flex justify-between items-center border-t-2 border-blue-300 pt-2 mt-2">
                <h1 className="text-lg font-bold text-black">Total</h1>
                <span className="font-bold text-2xl text-blue-600">
                  $902.46
                </span>
              </div>
            </Section>
          </section>
          <section className="mt-2">
            <Section>
              <button className="w-full bg-blue-600 text-white p-3 rounded-md text-lg font-bold hover:bg-blue-700 transition cursor-pointer">
                Pay Now
              </button>
            </Section>
          </section>
        </section>
      </main>
      {/* <footer className="flex items-center justify-center h-16 w-full text-sm text-black bg-secondary border-t-1">
        Powered by Team 16 @ Fintech X Makers-IQ
      </footer> */}
    </div>
  );
};

export default Payment;
