import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { CircularLoding, GetCredit, getscope, getsubscribation } from "../redux/action/AuthAction";
import Navbar from "../screens/jobseeker/Home/Navbar";
import ApplicationTrack from "../screens/jobseeker/JobseekerDashboard/ApplicationTrack";
import AppliedJob from "../screens/jobseeker/JobseekerDashboard/AppliedJob";
import AvailableJobs from "../screens/jobseeker/JobseekerDashboard/AvailableJobs";
import SavedJob from "../screens/jobseeker/JobseekerDashboard/SavedJob";
import TrackReferralDashboard from "../screens/jobseeker/JobseekerDashboard/TrackReferralDashboard";
import UserProfileForm from "../screens/jobseeker/JobseekerDashboard/UserProfileForm";
import Profile from "../components/JobSeeker/ManageProfile/Profile/Profile";
import BlogsAndActivity from "../screens/Employer/EmployeeDashboard/BlogsAndActivity";
import SubscriptionPage from "../screens/jobseeker/JobseekerDashboard/SubscriptionPage";
import JobseekerSubscriptionPopup from "../screens/jobseeker/jobseekersubscriptionpopup/JobSeekerSubscriptionPopup";
import BlogViewPage from "../screens/Employer/EmployeeDashboard/BlogViewPage";
import AllNotification from "../screens/Employer/notification/AllNotification";
import JobseekerSubscription from "../screens/jobseeker/JobseekerSubscription/JobseekerSubscription";



const JobseekerNavigation = () => {
  const dispatch = useDispatch();

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  React.useEffect(() => {
    dispatch(getscope(Loading));
  }, []);

  React.useEffect(() => {
    dispatch(getsubscribation(Loading));
    dispatch(GetCredit());
  });

  return (
    <>
      <Routes>
        <Route exact path="/availablejobs" element={<AvailableJobs />} />
        <Route exact path="/AppliedJob" element={<AppliedJob />} />
        <Route exact path="/Applicationtrack" element={<ApplicationTrack />} />
        <Route exact path="/SavedJob" element={<SavedJob />} />
        <Route
          exact
          path="/TrackReferralDashboard"
          element={<TrackReferralDashboard />}
        />
        <Route exact path="/userprofile" element={<UserProfileForm />} />
        <Route exact path="/jssubscriptionpp" element={<JobseekerSubscriptionPopup />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/blogs" element={<BlogsAndActivity />} />
        <Route exact path="/read-blogs/:BLOGID" element={<BlogViewPage />} />
        <Route exact path="/subscriptiondetails" element={<SubscriptionPage />} />
        <Route exact path="/Notification" element={<AllNotification />} />
        <Route exact path='/JobseekerSubscription/:TYPE/:USER_ID' element={<JobseekerSubscription />} />
      </Routes>
    </>
  );
};

export default JobseekerNavigation;
