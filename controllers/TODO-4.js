// TODO 4: SETUP CONTROLLER

// Import Model
const Patients = require("../models/TODO-5");

class PatientControllers {
  // Get All Resource
  async index(req, res) {
    // Define Student method All
    const patient = await Patients.all();

    // Check resource empty or not
    if (patient.length) {
      const data = {
        message: "Get All Resource",
        data: patient,
      };

      return res.status(200).json(data);
    }

    // Resource Empty
    const data = {
      message: "Data is Empty",
      data: patient,
    };

    return res.status(200).json(data);
  }

  //   Add Resource
  async store(req, res) {
    // Array Destructing
    const { name, phone, address, status } = req.body;

    // Check resource empty or not
    if (!name || !phone || !address || !status) {
      const data = {
        message: "All fields must be filled correctly",
      };

      return res.status(422).json(data);
    }

    // Check status
    else if (
      status != "Positive" &&
      status != "Dead" &&
      status != "Recovered"
    ) {
      const data = {
        message: "Status must be Positive or Recovered or Dead",
      };

      return res.status(422).json(data);
    }

    // Define patient method create
    const patient = await Patients.create(req.body);

    const data = {
      message: "Resource is added successfully",
      data: patient,
    };

    return res.status(201).json(data);
  }

  //   Get Detail Resource
  async find(req, res) {
    //   Array Destructing
    const { id } = req.params;

    // Define Patient method find
    const patient = await Patients.find(id);

    // Check resource empty or not
    if (patient) {
      const data = {
        message: "Get Detail Resource",
        data: patient,
      };

      return res.status(200).json(data);
    }

    // Resource empty
    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  //   Edit Resource
  async update(req, res) {
    //   Array Destructing
    const { id } = req.params;

    // Define patient method find
    const patient = await Patients.find(id);

    // Check resource empty or not
    if (patient) {
      // Define patientUpdated method update
      const patientUpdated = await Patients.update(id, req.body);

      const data = {
        message: "Resource is update successfully",
        data: patientUpdated,
      };

      return res.status(200).json(data);
    }

    // Resource empty
    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  //   Delete Resource
  async destroy(req, res) {
    //   Array Destructing
    const { id } = req.params;

    // Define patient method find
    const patient = await Patients.find(id);

    // Check Resource empty or not
    if (patient) {
      // Method delete
      await Patients.delete(id);

      const data = {
        message: "Resource is delete successfully",
      };

      return res.status(200).json(data);
    }

    // Resource Empty
    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  //   Search Resouce By Name
  async search(req, res) {
    //   Array Destructing
    const { name } = req.params;

    // Define patient method search
    const patient = await Patients.search(name);

    // Check resource empty or not
    if (patient.length) {
      const data = {
        message: "Get searched resource",
        data: patient,
      };

      return res.status(200).json(data);
    }

    // Resource Empty
    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  //   Get Positive Resource
  async positive(req, res) {
    //   Define Patient method findByStatus
    const patient = await Patients.findByStatus("Positive");

    // Check resource empty or not
    if (patient.length) {
      const data = {
        message: "Get positive resource",
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    }

    // Resource Empty
    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  //   Get Recovered Resource
  async recovered(req, res) {
    //   Define Patient method findByStatus
    const patient = await Patients.findByStatus("Recovered");

    // Check resource empty or not
    if (patient.length) {
      const data = {
        message: "Get recovered resource",
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    }

    // Resource Empty
    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }

  //   Get Dead Resource
  async dead(req, res) {
    //   Define Patient method findByStatus
    const patient = await Patients.findByStatus("Dead");

    // Check resource empty or not
    if (patient.length) {
      const data = {
        message: "Get dead resource",
        total: patient.length,
        data: patient,
      };

      return res.status(200).json(data);
    }

    // Resource Empty
    const data = {
      message: "Resource not found",
    };

    return res.status(404).json(data);
  }
}

// Declare patientController
const object = new PatientControllers();

// Export Object
module.exports = object;
