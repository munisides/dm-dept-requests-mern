import express from "express";
import {
  createDeptRequest,
  getAllDeptRequests,
  getSingleDeptRequest,
  updateDeptRequest,
  deleteDeptRequest,
} from "../controllers/deptRequestController.js";

const router = express.Router();

router.route("/").get(getAllDeptRequests).post(createDeptRequest);

router
  .route("/:id")
  .get(getSingleDeptRequest)
  .patch(updateDeptRequest)
  .delete(deleteDeptRequest);

export default router;
