import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import {
  GET_ALLPOST,
  GET_APPLIEDJOB,
  GET_AVILABLEJOB,
  GET_SAVEDJOB,
} from "../constants/action";
import { CircularLoding } from "./AuthAction";

export const Get_AvilableJob = (CircularLoding) => (dispatch) => {
  CircularLoding(true);
  axiosInstance.get("employer/availableJobs").then((result) => {
    if (result.data.status == 1) {
      dispatch({
        type: GET_AVILABLEJOB,
        payload: result.data.data,
      });
      CircularLoding(false);
    }

    if (result.data.status == 0) {
      toast.error(result.data.message);
      CircularLoding(false);
    }
  });
};
export const GetAppliedJob = (CircularLoding) => (dispatch) => {
  CircularLoding(true);
  axiosInstance.get("jobseeker/ApplyJob").then((result) => {
    if (result.data.status == 1) {
      dispatch({
        type: GET_APPLIEDJOB,
        payload: result.data.data,
      });
      CircularLoding(false);
    }

    if (result.data.status == 0) {
      toast.error(result.data.message);
      CircularLoding(false);
    }
  });
};

export const UpdateUserProfile =
  (userdate, reloaduser, CircularLoding) => (dispatch) => {
    axiosInstance.put("user/complete-profile", userdate).then((result) => {
      CircularLoding(true);
      console.log(result.data);
      if (result.data.status == 1) {
        CircularLoding(false);
        reloaduser();
        toast.success("Success! Profile Updated");
      }

      if (result.data.status == 0) {
        toast.error(result.data.message);
        CircularLoding(false);
      }
    });
  };

export const BlogContent = (message, history) => (dispatch) => {
  const bodydata = {
    BLOG_POPUP: message,
  };
  axiosInstance
    .post("user/blogPopup", bodydata)
    .then((result) => {
      if (result.data.status === 1) {
        toast.success(result.data.message);
        history(`/`, { replace: true });
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
    })
    .catch((err) => {
      //   toast.error('somthing went wrong!!');
      toast.error(err);
    });
};

export const specialService = (name, email, mobno, history) => (dispatch) => {
  const bodydata = {
    NAME: name,
    EMAIL: email,
    PHONENO: mobno,
  };
  axiosInstance
    .post("user/specialservice", bodydata)
    .then((result) => {
      if (result.data.status === 1) {
        toast.success(result.data.message);
        history(`/`, { replace: true });
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
    })
    .catch((err) => {
      //   toast.error('somthing went wrong!!');
      toast.error(err);
    });
};

export const getallpost = (CircularLoding) => (dispatch) => {
  CircularLoding(true);
  axiosInstance
    .get("jobseeker/getavilablejobs")
    .then((result) => {
      if (result.data.status === 1) {
        CircularLoding(false);
        dispatch({
          type: GET_ALLPOST,
          payload: result.data.data,
        });
      }
      if (result.data.status === 0) {
        CircularLoding(false);
        toast.error(result.data.message);
      }
    })
    .catch((err) => {
      CircularLoding(false);
      toast.error(err);
    });
};

export const AppliedJobAction =
  (data, CircularLoding, response) => (dispatch) => {
    CircularLoding(true);
    axiosInstance
      .post("jobseeker/ApplyJob", data)
      .then((result) => {
        if (result.data.status === 1) {
          CircularLoding(false);
          toast.success(result.data.message);
          window.location.reload();
        }
        if (result.data.status === 0) {
          CircularLoding(false);
          toast.error(result.data.message);
        }
      })
      .catch((err) => {
        CircularLoding(false);
        toast.error(err);
      });
  };

export const makesubscribation =
  (data, CircularLoding, response) => (dispatch) => {
    CircularLoding(true);
    axiosInstance
      .post("jobseeker/makesubscribation", data)
      .then((result) => {
        response(result)
        if (result.data.status === 1) {
          CircularLoding(false);
          toast.success(result.data.message)
        }
        if (result.data.status === 0) {
          CircularLoding(false);
          toast.error(result.data.message);
        }
      })
      .catch((err) => {
        CircularLoding(false);
        toast.error(err);
      });
  };
