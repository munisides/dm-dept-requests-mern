import DeptRequest from "../models/deptRequestModel.js";

const createDeptRequest = async (req, res) => {
  req.body.user = req.user.userId;
  const deptRequest = await DeptRequest.create(req.body);
  res.status(201).json({ deptRequest });
};

const getAllDeptRequests = async (req, res) => {
  const deptRequests = await DeptRequest.find({});
  res.status(200).json({ requests, count: deptRequests.length });
};

const getSingleDeptRequest = async (req, res) => {
  const { id: deptRequestId } = req.params;
  const deptRequest = await DeptRequest.findOne({ _id: deptRequestId });
  if (!request) {
    throw new Error(`No request found with id : ${deptRequestId}`);
  }
  res.status(200).json({ deptRequest });
};

const updateDeptRequest = async (req, res) => {
  const { id: deptRequestId } = req.params;

  if (!deptRequest) {
    throw new Error(`No request found with id : ${deptRequestId}`);
  }

  const deptRequest = await DeptRequest.findOneAndUpdate({ _id: deptRequestId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ deptRequest });
};

const deleteDeptRequest = async (req, res) => {
  const { id: deptRequestId } = req.params;

  const deptRequest = await DeptRequest.findOne({ _id: deptRequestId });

  if (!deptRequest) {
    throw new Error(`No request to delete with id : ${deptRequestId}`);
  }

  await deptRequest.remove();
  res.status(200).json({ msg: 'Success! Request removed.' });
};

export {
    createDeptRequest,
    getAllDeptRequests,
    getSingleDeptRequest,
    updateDeptRequest,
    deleteDeptRequest
}
