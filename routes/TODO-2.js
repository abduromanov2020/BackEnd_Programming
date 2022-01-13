// TODO 2: SETUP ROUTING (ROUTER)

// Import Controller
const PatientControllers = require("../controllers/TODO-4");

// Declare Express
const express = require("express");
// Declare Router
const router = express.Router();

// Route Endpoint Patient
router.get("/patients", PatientControllers.index);
router.post("/patients", PatientControllers.store);
router.get("/patients/:id", PatientControllers.find);
router.put("/patients/:id", PatientControllers.update);
router.delete("/patients/:id", PatientControllers.destroy);
router.get("/patients/search/:name", PatientControllers.search);
router.get("/patients/status/positive", PatientControllers.positive);
router.get("/patients/status/recovered", PatientControllers.recovered);
router.get("/patients/status/dead", PatientControllers.dead);

// Export router
module.exports = router;
