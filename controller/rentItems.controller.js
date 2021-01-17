const userService = require("../services/rentItems");

exports.addItem = async (req, res) => {
  
  try {
    let userResponce = await userService.addItem(req, res);
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

exports.getItem = async (req, res) => {
  try {
    console.log("hi");
    let userCommentResponse = await userService.getItem(req, res);
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
      console.log(e)
    res.send({
      status: 500,
      message: "server error",
    });
  }
};

exports.updateItem = async (req, res) => {
  try {
    let userCommentResponse = await userService.updateItem(req, res);
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

  exports.deleteItem = async (req, res) => {
    try {
      let userCommentResponse = await userService.deleteItem(req, res);
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
