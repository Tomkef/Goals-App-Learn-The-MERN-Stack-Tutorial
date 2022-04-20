const express = require("express");
const {
  getGoals,
  updateGoal,
  setGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

const router = express.Router();

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

/*
router.get(`/`, getGoals);
router.post(`/`, setGoal);
router.put(`/:id`, updateGoal);
router.delete(`/:id`, deleteGoal);
*/

module.exports = router;
