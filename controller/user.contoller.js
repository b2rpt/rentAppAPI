const userService = require("../services/userService");

exports.registerUserData = async (req, res) => {
  
  try {
    let userResponce = await userService.registerUserData(req, res);
    userResponce
      ? res.send({
          status: 200,
          message: "Data saved successfully !",
        })
      : res.send({
          status: 400,
          message: "Error occured !",
        });
  } catch (e) {
    res.send({
      status: 500,
      message: "server error, Not able to save data!",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    console.log("hi");
    let userCommentResponse = await userService.getUser(req, res);
    userCommentResponse
      ? res.send({
          status: 200,
          message: "data fetched successfully !",
          data: userCommentResponse,
        })
      : res.send({
          status: 400,
          message: "Error occured !",
        });
  } catch (e) {
    res.send({
      status: 500,
      message: "server error",
    });
  }
};

exports.updateUserData = async (req, res) => {
  try {
    let userCommentResponse = await userService.updateUserData(req, res);
    userCommentResponse
      ? res.send({
          status: 200,
          message: "data updated successfully !",
        })
      : res.send({
          status: 400,
          message: "Error occured !",
        });
  } catch (e) {
    res.send({
      status: 500,
      message: "server error, Not able to update data!",
    });
  }}

  exports.deleteUser = async (req, res) => {
    try {
      let userCommentResponse = await userService.deleteUser(req, res);
      userCommentResponse
        ? res.send({
            status: 200,
            message: "data deleted successfully !",
          })
        : res.send({
            status: 400,
            message: "Error occured !",
          });
    } catch (e) {
      res.send({
        status: 500,
        message: "server error, Not able to deleted data!",
      });
    }
}
