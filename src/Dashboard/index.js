import "./style.css";

const EarningDetails = [
  {
    id: 1,
    imgUrl: "https://i.postimg.cc/PC2m0Wn0/002-cash-png.png",
    alt: "cash",
    earned: "$9,568.00",
    category: "Total Balance",
  },
  {
    id: 2,
    imgUrl: "https://i.postimg.cc/PvNXrv63/003-credit-card-png.png",
    alt: "credit card",
    earned: "60%",
    category: "Discount Percentage",
  },
  {
    id: 3,
    imgUrl: "https://i.postimg.cc/0bgFNJHz/001-donation-png.png",
    alt: "donate",
    earned: "300",
    category: "Total Referral",
  },
  {
    id: 4,
    imgUrl: "https://i.postimg.cc/L6GrDr6m/004-hourglass-png.png",
    alt: "hourglass",
    earned: "$300",
    category: "Discount Amount",
  },
  {
    id: 5,
    imgUrl: "https://i.postimg.cc/85ry7CMW/005-percentage-png.png",
    alt: "percentage",
    earned: "$465.00",
    category: "Commission Amount",
  },
  {
    id: 6,
    imgUrl: "https://i.postimg.cc/YCn88FxY/006-wage-png.png",
    alt: "wage",
    earned: "$158.00",
    category: "Total Earnings",
  },
  {
    id: 7,
    imgUrl: "https://i.postimg.cc/KjxnmcNm/007-referral-png.png",
    alt: "commission discount",
    earned: "40%",
    category: "Commission Discount",
  },
  {
    id: 8,
    imgUrl: "https://i.postimg.cc/qvvHz8R3/008-transfer-png.png",
    alt: "total earn",
    earned: "$534.00",
    category: "Total Bank Transfer",
  },
];

const Dashboard = () => (
  <>
  <div className="dashboard-container">
    <div className="referral-search-profiles-container">
      <h1 className="referral-heading">Referral Dashboard</h1>
      <div className="search-container">
        <img
          src="https://i.postimg.cc/0MnBb6TS/XMLID-223.png"
          alt="XMLID-223"
          className="search-image"
        />
        <input type="search" placeholder="Search here..." className="search" />

        <button className="search-button">Search</button>
      </div>

      <div className="profile-container">
        <img
          src="https://i.postimg.cc/wy1wTWQC/Notifications.png"
          alt="Notifications"
          className="notification-image"
        />
        <img
          src="https://i.postimg.cc/75C1zC2z/Rectangle-1393.png"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-name-container">
          <p className="profile-name">Name</p>
          <p className="admin">Admin</p>
        </div>
        <img
          src="https://i.postimg.cc/QHSs7C3j/Shape.png"
          alt="Shape"
          className="down-arrow-image"
        />
      </div>
    </div>

    <ul className="earnings-list-item-container">
      {EarningDetails.map((eachCommission) => (
        <li className="earning-item-details" key={eachCommission.id}>
          <img
            src={eachCommission.imgUrl}
            alt={eachCommission.alt}
            className="earning-category-image"
          />
          <div className="earnings-container">
            <p className="earnings">{eachCommission.earned}</p>
            <p className="earning-category">{eachCommission.category}</p>
          </div>
        </li>
      ))}
    </ul>

    <div className="referrals-details-container">
      <div className="service">
        <p className="services-heading">Service</p>
        <p className="service-values">some service</p>
      </div>
      <div className="service">
        <p className="services-heading">Your Referrals</p>
        <p className="service-values service-value">
          0+&nbsp;&nbsp;&nbsp;&nbsp;0
        </p>
      </div>
      <div className="service">
        <p className="services-heading">Active Referrals</p>
        <p className="service-values service-value">
          0+&nbsp;&nbsp;&nbsp;&nbsp;0
        </p>
      </div>
      <div className="service">
        <p className="services-heading">Total Ref. Earnings</p>
        <p className="service-values service-value">$0.00</p>
      </div>
    </div>

    <div className="refer-sub-header-container">
      <h1 className="refer-friends-text">Refer Friends And Earn More !!</h1>
      <div className="underline"></div>
    </div>

    <div className="referral-link-container">
      <h1 className="refer-link-text">Your Referral Link</h1>
      <h1 className="refer-link-text r-text2">Your Referral Code</h1>
    </div>

    <div className="referral-links-container">
      <input
        type="text"
        placeholder="https://gobusiness.com/?refferal=ABCXYZ"
        className="referral-link-input"
      />
      <button className="copy-btn">
        <img
          src="https://i.postimg.cc/wvptN6GZ/Symbol.png"
          alt="Symbol"
          className="copy-img"
        />{" "}
        Copy
      </button>
      <input type="text" placeholder="ABCXYZ" className="referral-code" />
      <button className="copy-btn">
        <img
          src="https://i.postimg.cc/wvptN6GZ/Symbol.png"
          alt="Symbol"
          className="copy-img"
        />{" "}
        Copy
      </button>
    </div>
    </div>
  </>
);

export default Dashboard;
